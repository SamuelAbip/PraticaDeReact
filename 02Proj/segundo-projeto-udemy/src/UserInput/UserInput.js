import React from "react";

const userInput = ( props ) => {
  return (
    <div>
      <input type="text" onChange={props.changed} username={props.username}></input>
    </div>
  )
};

export default userInput;