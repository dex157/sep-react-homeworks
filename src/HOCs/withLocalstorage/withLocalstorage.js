import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, value) => WrappedComponent => {
  return class extends Component {
    render() {
      return <WrappedComponent />;
    }
  };
};

export default withLocalstorage;
