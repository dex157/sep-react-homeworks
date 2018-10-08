import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import LoginForm from '../LoginForm';
import AppRouter from '../AppRouter';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';

export default () => (
  <DataProvider>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/app" component={LoginForm} /> */}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  </DataProvider>
);
