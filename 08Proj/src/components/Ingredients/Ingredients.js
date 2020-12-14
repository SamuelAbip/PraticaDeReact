import React, { useReducer, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientsList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from './Search';

function ingredientReducer(currentIngredients, action) {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter(ing => ing.id !== action.id);
    default: throw new Error("Should not get here!");
  };
};

function httpReducer(currentHttpState, action) {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...currentHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...currentHttpState, error: null };
    default: throw new Error("Should not get here!");
  };
};

function Ingredients() {
  const [userIngredients, dispatchIngredient] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatchIngredient({ type: "SET", ingredients: filteredIngredients });
  }, []);

  function addIngredientHandler(ingredient) {
    dispatchHttp({ type: "SEND" });
    fetch("https://react-project-9-default-rtdb.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        dispatchHttp({ type: "RESPONSE" });
        return response.json();
      })
      .then(responseData => {
        dispatchIngredient({ type: "ADD", ingredient: { id: responseData.name, ...ingredient } });
      })
      .catch(error => {
        dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong!" });
      });
  };

  function removeIngredientHandler(ingredientId) {
    dispatchHttp({ type: "SEND" });
    fetch(`https://react-project-9-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: "DELETE"
    }).then(response => {
      dispatchHttp({ type: "RESPONSE" });
      dispatchIngredient({ type: "DELETE", id: ingredientId });
    })
      .catch(error => {
        dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong!" });
      });
  };

  function clearError() {
    dispatchHttp({ type: "CLEAR" });
  };

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientsList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
