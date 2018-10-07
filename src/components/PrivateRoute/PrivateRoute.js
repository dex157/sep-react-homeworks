import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { children, isAuthorized, redirectPath } = this.props;

    return isAuthorized ? children : <Redirect to={redirectPath} />;
  }
}

export default withAuth(PrivateRoute);
