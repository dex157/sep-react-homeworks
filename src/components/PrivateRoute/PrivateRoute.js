import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
      const { 
        component: RoutComponent,
        isAuthorized, 
        redirectPath, 
        ...props
      } = this.props;
  
      return (
        isAuthorized
          ? <Route {...props} component={RoutComponent}/>
          : <Redirect to={redirectPath}/>
      )
    }
}

export default withAuth(PrivateRoute);
