import React, {Component} from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import Search from '../Search';

export default class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} exact="/" />
                    <PrivateRoute path="/search" component={Search} />
                    <Redirect from="*" to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}