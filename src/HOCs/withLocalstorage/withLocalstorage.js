import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, defaultValue) => WrappedComponent => {
    return class extends Component {
        savedData = () => {
            return load(key) || defaultValue;
        }

        saveData = data => {
            save(key, data);
            this.forceUpdate();
        }

        render() {
            const { savedData, saveData } = this;

            return (
                <WrappedComponent 
                    savedData={savedData()}
                    saveData={saveData}
                    {...this.props}
                />
            )
        };
    }
} 

export default withLocalstorage;
