import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  
  render() {
    const { isAuthorized} = this.props;

    if (isAuthorized)  {
      return <Route {...this.props} />;
    }

    return <Redirect to='/login'></Redirect>
  }
}

export default withAuth(PrivateRoute);
