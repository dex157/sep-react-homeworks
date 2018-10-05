import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initData) => WrappedComponent => {
  return class WithLocalstorage extends Component {
	  savedData = () => {
    	return load(localStorageKey) || initData;
    }

    saveData = newData => {
			save(localStorageKey, newData);
			this.forceUpdate();
    };

    render() {
      console.log('рендер хок');
      return (
        <WrappedComponent
          {...this.props}
          saveData={this.saveData}
          savedData={this.savedData()}
        />
      );
    }
  };
};

export default withLocalstorage;
