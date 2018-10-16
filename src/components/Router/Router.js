import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import Search from '../Search';

class Router extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Redirect from="/" to="/login" exact />
          <Route path="/login" component={Login} />
          <PrivateRoute component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(Router);
