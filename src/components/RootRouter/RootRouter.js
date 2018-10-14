import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
// import PrivateRoute from '../PrivateRoute';
import LoginForm from '../LoginForm';
import AppRouter from '../AppRouter';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';

export default () => (
  <DataProvider>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginForm} exact />
          <Route path="/app" component={AppRouter} exact />  
          <Route path="/app/inbox" component={AppRouter}  />
          <Route path="/app/outbox" component={AppRouter}  />        
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  </DataProvider>
);
