import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import Search from '../Search';

class Router extends Component {
  render() {
    return (
        <div className="App">
        <Switch>
        <Route path="/" component={Login} />
          <PrivateRoute component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Router);
