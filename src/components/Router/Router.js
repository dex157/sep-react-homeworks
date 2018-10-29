import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Search from '../Search/Search';
import PrivateRouter from '../PrivateRoute';

import './Router.module.css';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRouter path="/search" component={Search} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
