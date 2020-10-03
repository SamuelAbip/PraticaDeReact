import React, { useState } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  const [userOutputState, setOutputState] = useState({
    userOutput: [
      { username: "samuel_abip" }
    ]
  });

  const nameChangerHandler = (event) => {
    setOutputState({
      userOutput: [
        { username: event.target.value }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Digit the desired username:</h1>
      <UserOutput username={userOutputState.userOutput[0].username} />
      <UserInput changed={nameChangerHandler} />
    </div>
  );
}

export default App;
