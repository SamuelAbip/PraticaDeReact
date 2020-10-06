import React, { useState } from 'react';
import classes from './App.module.css';
import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

const App = props => {
  const [getPersonsState, setPersonsState] = useState({
    persons: [
      { id: "a", name: "Samuel", age: "22" },
      { id: "b", name: "Saulo", age: "25" },
      { id: "c", name: "Ingrid", age: "25" }
    ],
    showPersons: false
  });

  const deletePersonHandler = (personIndex) => {
    const newPersons = [...getPersonsState.persons];
    newPersons.splice(personIndex, 1);
    setPersonsState({ ...getPersonsState, persons: newPersons });
  };

  const togglePersonsHandler = () => {
    const doesShow = getPersonsState.showPersons;
    setPersonsState({
      ...getPersonsState,
      showPersons: !doesShow
    });
  };

  const nameChangedHandler = (event, id) => {
    const personIndex = getPersonsState.persons.findIndex(x => x.id === id);
    const changedPerson = { ...getPersonsState.persons[personIndex], name: event.target.value };
    const newPersons = [...getPersonsState.persons];
    newPersons[personIndex] = changedPerson;
    setPersonsState({
      ...getPersonsState,
      persons: newPersons
    });
  };
  
  let persons = null;
  if (getPersonsState.showPersons) {
    persons = <Persons
          persons={getPersonsState.persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler} />;
  };

  return (
    <div className={classes.App}>
      <Cockpit
      showPersons={getPersonsState.showPersons}
      persons={getPersonsState.persons}
      clicked={togglePersonsHandler} />
      {persons}
    </div>
  );
}

export default App;
