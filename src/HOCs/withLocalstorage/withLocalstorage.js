import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, value) => WrappedComponent => {
  class With extends Component {
    saveData = data => {
      save(localStorageKey, data);
      this.forceUpdate();
    }

    loadData = () => {
      return load(localStorageKey) || value;
    }

    render() {
      const { forwardedRef, ...props } = this.props;
      
      return (
        <WrappedComponent
          {...props}
          ref={forwardedRef}
          saveData={this.saveData}
          savedData={this.loadData()}
        />
      );
    }
  }

  return React.forwardRef((props, ref) => (
    <With {...props} forwardedRef={ref} />
  ));
};

export default withLocalstorage;