import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header><nav><ul>
            <li><NavLink to={{ pathname: "/users" }} exact>Users Page</NavLink></li>
            <li><NavLink to="/courses" exact>Courses Page</NavLink></li>
          </ul></nav></header>
          <Switch>
            <Route path="/users" exact component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
