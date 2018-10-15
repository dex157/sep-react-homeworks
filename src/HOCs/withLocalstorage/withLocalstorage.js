import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, initValue) => (WrappedComponent) => {
    console.log(key, initValue);

    return class extends Component {

        saveData = (value) => {
            save(key, value);
        };
        savedData = () => {
            return load(key)
        };

        render(){
            return <WrappedComponent savedData={this.savedData} saveData={this.saveData} {...this.props} />
        }
    }
};

export default withLocalstorage;
