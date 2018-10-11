import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initData) => (WrappedComponent) => {
    return class extends Component {

        SavedData = () => {
            return load(localStorageKey) || initData;
        }
        
        SaveData = (data) => {
            save(localStorageKey, data);
            this.forceUpdate();
        }

        render(){
            return (
            <WrappedComponent
                savedData = {this.SavedData()}
                saveData = {this.SaveData}
            />);
        }
    }
};

export default withLocalstorage;
