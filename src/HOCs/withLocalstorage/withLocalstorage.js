import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = () => (WrappedComponent) => {
    return class extends Component {

        saveData = () => save;
        savedData = () => load;

        render(){
            return <WrappedComponent savedData={this.savedData()} saveData={this.saveData()} {...this.props} />
        }
    }
};

export default withLocalstorage;
