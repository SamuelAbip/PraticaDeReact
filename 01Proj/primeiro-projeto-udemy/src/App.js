import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person"

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Samuel", age: 22 },
      { name: "Saulo", age: 25 },
      { name: "Ingrid", age: 25 }
    ]
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 22 },
        { name: "Saulo", age: 25 },
        { name: "Ingrid", age: 55 }
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Samuel", age: 22 },
        { name: event.target.value, age: 25 },
        { name: "Ingrid", age: 25 }
      ]
    });
  };
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <p>This is really working!</p>
      <button
        onClick={() => switchNameHandler("Samuel Abip")}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, "Samuel!")}
        changed={nameChangedHandler} >My Hobbies: Gaming</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
