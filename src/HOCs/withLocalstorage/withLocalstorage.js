import React, { Component } from 'react';
import { load, save } from '../../localstorage';

// const withLocalstorage = () => () => {};
// const withLocalstorage = (localStorageKey, data) => () => {
// };

const withLocalstorage = (localStorageKey, data) => (WrappedComponent) => {

    return class extends Component {
        render () {
            return <WrappedComponent />
        }
    }
};

export default withLocalstorage;
