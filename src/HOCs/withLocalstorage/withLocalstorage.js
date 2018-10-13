import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, value) => WrappedComponent => {
  return class extends Component {
    saveData = data => {
      save(localStorageKey, data);
      this.forceUpdate();
    };

    savedData = () => {
      return load(localStorageKey) || value;
    };

    render() {
      return (
        <WrappedComponent
          saveData={this.saveData}
          savedData={this.savedData()}
        />
      );
    }
  };
};

export default withLocalstorage;
