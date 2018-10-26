import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Search from '../Search';
import Login from '../Login';

class Router extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} exact />
                    <PrivateRoute path="/search" component={Search} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
