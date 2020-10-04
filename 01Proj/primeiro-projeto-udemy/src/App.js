import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person"

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "a", name: "Samuel", age: "22" },
      { id: "b", name: "Saulo", age: "25" },
      { id: "c", name: "Ingrid", age: "25" }
    ],
    showPersons: false
  });

  const deletePersonHandler = (personIndex) => {
    const newPersons = [...personsState.persons];
    newPersons.splice(personIndex, 1);
    setPersonsState({ ...personsState, persons: newPersons });
  };

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      ...personsState,
      showPersons: !doesShow
    });
  };

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(x => x.id === id);
    const changedPerson = { ...personsState.persons[personIndex], name: event.target.value };
    const newPersons = [...personsState.persons];
    newPersons[personIndex] = changedPerson;
    setPersonsState({
      ...personsState,
      persons: newPersons
    });
  };

  let persons = null;
  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) =>
          <Person
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => nameChangedHandler(event, person.id)} />
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>This is a list of people!</h1>
      {console.log(personsState)}
      <button onClick={() => togglePersonsHandler()}>Show persons: </button>
      {persons}
    </div>
  );
}

export default App;
