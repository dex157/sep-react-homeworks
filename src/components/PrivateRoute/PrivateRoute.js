import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  renderPrivate = () => {
    const { component: Component, isAuthorized } = this.props;
    return isAuthorized ? <Component /> : <Redirect to="/login" />;
  };
  render() {
    const { component: Component, isAuthorized, ...rest } = this.props;
    return <Route {...rest} render={this.renderPrivate} />;
  }
}

export default withAuth(PrivateRoute);
