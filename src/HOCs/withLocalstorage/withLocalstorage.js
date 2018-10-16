import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (keyStorage, defaultStorage) => WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        savedData: load(keyStorage) || defaultStorage
      };
    }

    saveData = values => {
      save(keyStorage, values);
      this.setState({ savedData: load(keyStorage) });
    };

    render() {
      const { savedData } = this.state;
      const { ...rest } = this.props;
      console.log('withLocalstorage->', rest);

      return (
        <WrappedComponent
          {...rest}
          saveData={this.saveData}
          savedData={savedData}
        />
      );
    }
  };
};

export default withLocalstorage;
