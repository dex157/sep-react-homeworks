import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render () {
        const { component: Component, isAuthorized, ...rest} = this.props;

        return (
            <Route {...rest} render = {(props) => (
                isAuthorized
                ? <Component {...props} />
                : <Redirect to = "/login" />
            )} />
        );
    }
}

export default withAuth(PrivateRoute);
