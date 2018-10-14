import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, value) => (WrappedComponent) => {
  return class WithStorage extends Component {
    state ={
      history: [] 
    }

    savedData = () => load(key) || value;

    saveData = data => {
      save(key, data);
      this.setState({history: data})
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
