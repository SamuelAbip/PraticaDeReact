import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClasses";
import Aux from "../hoc/Auxiliary";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(" [App.js] constructor");

  };

  state = {
    persons: [
      { id: "a", name: "Samuel", age: 22 },
      { id: "b", name: "Saulo", age: 25 },
      { id: "c", name: "Ingrid", age: 25 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps = (props, state) => {
    console.log(" [App.js] getDerivedStateFromProps", props);
    return state;
  };

  componentDidMount() {
    console.log(" [App.js] componentDidMount");
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  };

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(x => x.id === id);
    const changedPerson = { ...this.state.persons[personIndex], name: event.target.value };
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = changedPerson;
    this.setState((prevState, props) => {
      return {
        ...this.state,
        persons: newPersons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({
      ...this.state,
      persons: newPersons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      ...this.state,
      showPersons: !doesShow
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render = (props) => {
    console.log(" [App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    };

    return (
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>
          Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler} />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  };
};

export default withClass(App, classes.App);
