import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component{
  constructor(props) {
    super(props);
    console.log(" [App.js] constructor");
    
  };

  state = {
    persons: [
      { id: "a", name: "Samuel", age: "22" },
      { id: "b", name: "Saulo", age: "25" },
      { id: "c", name: "Ingrid", age: "25" }
    ],
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({ ...this.state, persons: newPersons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      ...this.state,
      showPersons: !doesShow
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(x => x.id === id);
    const changedPerson = { ...this.state.persons[personIndex], name: event.target.value };
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = changedPerson;
    this.setState({
      ...this.state,
      persons: newPersons
    });
  };

  render = (props) => {
    console.log(" [App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    };

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  };
};

export default App;
