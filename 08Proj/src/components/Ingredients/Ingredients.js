import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientsList from "./IngredientList";
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    setUserIngredients(
      prevIngredients => [
        ...prevIngredients,
        { id: Math.random().toString(), ...ingredient }
      ]);
  }

  const removeIngredientHandler = ingId => {
    setUserIngredients(prevIngredients =>
      prevIngredients.filter(el => el.id !== ingId)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientsList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
