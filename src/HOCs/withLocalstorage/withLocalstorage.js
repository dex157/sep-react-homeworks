import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, value) => WrappedComponent => {
  return class extends Component {
    saveData = data => {
      save(key, data);
      this.forceUpdate();
    };
    savedData = () => {
      return load(key) || value;
    };

    render() {
      return (
        <WrappedComponent
          savedData={this.savedData()}
          saveData={this.saveData}
        />
      );
    }
  };
};

export default withLocalstorage;
