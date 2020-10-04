import React, { Component, useState } from "react";

const ErrorBoundary = props => {
  const [getState, setState] = useState({
    hasError: false,
    errorMessage: ""
  });

  const componentDidCath = (error, info) => {
    setState({
      hasError: true, errorMessage: error
    });
  };

  if (getState.hasError) {
    return <h1>{getState.errorMessage}</h1>
  } else {
    return props.children;
  }
}

export default ErrorBoundary;