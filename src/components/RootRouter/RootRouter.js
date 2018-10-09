import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import LoginForm from '../LoginForm';
import AppRouter from '../AppRouter';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';

class RootRouter extends Component {
  renderPrivateRoute() {
    return (
      <PrivateRoute redirectPath="/login">
        <AppRouter />
      </PrivateRoute>
    );
  }

  render() {
    return (
      <DataProvider>
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Redirect from="/" to="/login" exact />
              <Route path="/login" component={LoginForm} />
              <Route path="/app" render={this.renderPrivateRoute} />
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </DataProvider>
    );
  }
}
export default RootRouter
