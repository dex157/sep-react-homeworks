import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import Search from '../Search';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <PrivateRoute path="/search" component={Search} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;