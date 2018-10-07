import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { children, isAuthorized } = this.props;

    return isAuthorized ? children : <Redirect to="/login" />;
  }
}

export default withAuth(PrivateRoute);
