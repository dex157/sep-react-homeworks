import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, defaultData) => (WrappedComponent) => {
  return class LocalStorageHOC extends Component {
    state = {
      data: defaultData,
    }

    saveData = (arr) => {
      this.setState({
        data: arr,
      })
      save(key, arr);
    }

    render() {
      const savedData=load(key) || defaultData;
      return (
        <WrappedComponent savedData={savedData} saveData={this.saveData} {...this.props} />
      );
    }
  }
};

export default withLocalstorage;
