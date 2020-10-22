import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
import AsyncComponent from "../../hoc/AsyncComponent";
import './Blog.css';

const AsyncNewPost = AsyncComponent(() => import("./NewPost/NewPost"));

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/posts/" exact>Home</NavLink></li>
              <li><NavLink to={{ pathname: "/new-post" }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;