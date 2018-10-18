import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import Search from '../Search';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Login} exact />
          <PrivateRoute path='/search' component={Search} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
