import React, { useState } from 'react';
import classes from './App.module.css';
import Person from "./Person/Person";

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

  let btnClass = "";
  let persons = null;

  if (getPersonsState.showPersons) {
    persons = (
      <div>
        {getPersonsState.persons.map((person, index) =>
          <Person
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => nameChangedHandler(event, person.id)} />
        )}
      </div>
    );
    btnClass = classes.Red;
  };

  let assignedClasses = [];
  if (getPersonsState.persons.length <= 2) {
    assignedClasses.push(classes.red);
  };
  if (getPersonsState.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  };

  return (
    <div className={classes.App}>
      <h1>This is a list of people!</h1>
      <p className={assignedClasses.join(" ")}>I'm really working!</p>
      <button className={btnClass} onClick={() => togglePersonsHandler()}>Toggle persons</button>
      {persons}
    </div>
  );
}

export default App;
