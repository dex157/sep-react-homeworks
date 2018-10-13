import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, defaultData) => (WrappedComponent) => {
  return class LocalStorageHOC extends Component {
    state = {
      data: load(key) || defaultData,
    }

    saveData = (arr) => {
      this.setState({
        data: arr,
      })
      save(key, arr);
    }

    render() {
      const { data } = this.state;
      return (
        <WrappedComponent savedData={data} saveData={this.saveData} {...this.props} />
      );
    }
  }
};

export default withLocalstorage;
