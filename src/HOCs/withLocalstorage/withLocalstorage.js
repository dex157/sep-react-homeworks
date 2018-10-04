import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, defaultValue) => (WrapperComponent) => {
    return class extends Component {
        saveData = (data) => {
            save(key, data);
            this.forceUpdate();
        };
        
        savedData = () => {
            return load(key) === null ? defaultValue : load(key);
        };
  
        render() {
            return (
                <WrapperComponent
                    saveData={this.saveData}
                    savedData={this.savedData()}
                />
            );
        }
    };
};

export default withLocalstorage;
