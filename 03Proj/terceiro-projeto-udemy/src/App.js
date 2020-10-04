/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import './App.css';


function App() {
  const [getState, setState] = useState({
    input: ""
  });

  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  const storeInput = (event) => {
    setState({ ...getState, input: event.target.value });
  };

  const inputLength = () => getState.input.length;

  const validationComponent = (textLength) => {
    if (textLength < 5) {
      return "Your text is too short"
    } if (textLength > 15) {
      return "Your text is too long"
    } else { return "Your text is valid" }
  };

  const deleteChar = (charIndex) => {
    const charArray = getState.input.split("");
    charArray.splice(charIndex, 1);
    const newInput = charArray.join("");
    setState({ ...getState, input: newInput });
  };

  let newArr = null;
  const charComponent = () => {
    const inputCopy = getState.input
    const charArray = inputCopy.split("");
    newArr = charArray.map((char, index) => <div style={style} onClick={() => deleteChar(index)} >{char}</div>);
  };

  return (
    <div className="App">
      <div>
        <h3>Enter your text:</h3>
        <input type="text" onChange={(event) => { storeInput(event) }} value={getState.input}></input>
        <h4>The text you typed has {inputLength()} characteres!</h4>
        <h4>{validationComponent(inputLength())}</h4>
        {charComponent()}
        {newArr}
      </div>
    </div>
  );
}

export default App;
