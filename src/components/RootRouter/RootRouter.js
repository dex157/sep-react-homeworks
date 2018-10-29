import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import LoginForm from '../LoginForm';
import AppRouter from '../AppRouter';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';

class RootRouter extends Component {
  state = {};
  render() {
    return (
      <DataProvider>
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={LoginForm} />
              <Route path="/login" exact component={LoginForm} />
              <PrivateRoute path="/app" component={AppRouter} />
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </DataProvider>
    );
  }
}

export default RootRouter;
