import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (storageName, storageData) => (WrapperComponent) => {
    return class extends Component {
        static displayName = 'ForwardRef';

        saveData = (data) => {
            const dataVal = data;
            save(storageName, dataVal);
            this.forceUpdate();
        }

        loadData = () => {
            return load(storageName) || storageData;
        }

        render() {
            return (
                <WrapperComponent 
                    saveData = {this.saveData}
                    savedData = {this.loadData()}
                />
            )
        }
    }

};

export default withLocalstorage;
