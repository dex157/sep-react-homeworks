import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, value) => WrappedComponent => {
  class LocHoc extends Component {
    savedData = () => {
      return load(localStorageKey) || value;
    };

    saveData = data => {
      save(localStorageKey, data);
      this.forceUpdate();
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          saveData={this.saveData}
          savedData={this.savedData()}
        />
      );
    }
  }
  return LocHoc;
};

export default withLocalstorage;
