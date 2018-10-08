import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {

    render() {
        const {component: Component, isAuthorized} = this.props;


        if (isAuthorized) {
            return <Route component={Component} exact/>
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default withAuth(PrivateRoute);
