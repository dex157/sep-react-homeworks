import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, defaultData) => (WrappedComponent) =>  class extends Component {
    state = {
        savedData: load(localStorageKey) || defaultData
    }

    render() {
        return (
            <WrappedComponent {...this.props} savedData = { this.state.savedData } saveData = { this.saveData } />
        );
    }

    saveData = (data) => {
        save (localStorageKey, data);
        this.setState({
            savedData: data
        });
    }
};

export default withLocalstorage;
