import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render () {
        const { component, isAuthorized, path} = this.props;

        return (
            isAuthorized ? 
            <Route path = {path} component = {component} />
            : <Redirect to = "/login" />
        );
    }
}

export default withAuth(PrivateRoute);