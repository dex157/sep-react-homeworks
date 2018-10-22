import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute'
import Login from '../Login';
import Search from '../Search';

class Router extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact />
            <PrivateRoute path="/search" component={Search} exact />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default Router;
