import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, value) => (WrappedComponent) => {
    return class withLocalstorage extends Component {
        saveData = (data) => {
          save(localStorageKey, data);
          this.forceUpdate();
        }

        loadData() {
            return load(localStorageKey) || value;
        }

        render() {
            const { forwaredRef, ...rest } = this.props;

            return (
                <WrappedComponent
                    {...rest}
                    ref={forwaredRef}
                    savedData={this.loadData()}
                    saveData={this.saveData}
                />
            );
        }
    }
};

export default withLocalstorage;
