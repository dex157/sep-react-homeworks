import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from '../Login';
import Search from '../Search';
import PrivateRoute from '../PrivateRoute';


export default class Router extends Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <PrivateRoute path='/search' component={Search} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    )
  }
} 