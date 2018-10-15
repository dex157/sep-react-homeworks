import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (storageKey, storageData) => WrappedComponent => {
  return class HOCWrapper extends Component {
    saveData = data => {
      save(storageKey, data);
      this.forceUpdate();
    };

    savedData() {
      return load(storageKey) || storageData;
    }

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
