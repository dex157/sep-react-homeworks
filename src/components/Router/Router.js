import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Search from '../Search';
import Login from '../Login';

export default  () =>     
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = { Login } />;
            <PrivateRoute path = "/search/" component = { Search } />
        </Switch>
    </BrowserRouter>



