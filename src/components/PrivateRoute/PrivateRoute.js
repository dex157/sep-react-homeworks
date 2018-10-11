import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const {
      isAuthorized,
      ...rest }
      = this.props;

    if (isAuthorized) {
      return <Route {...rest} />;
    }
    return <Redirect to="/login" />;
  }
}

export default withAuth(PrivateRoute);
