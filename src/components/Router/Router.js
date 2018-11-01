import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import Search from '../Search';

class Router extends Component {
  privateRoute = () => <PrivateRoute component={Search} />;

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/search" render={this.privateRoute} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
