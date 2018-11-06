import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, value) => WrappedComponent => {
  class Wrapper extends Component {
    saveData = data => {
      save(key, data);
      this.forceUpdate();
    };

    loadData() {
      return load(key) || value;
    }

    render() {
      const { forwaredRef, ...rest } = this.props;

      return (
        <WrappedComponent
          {...rest}
          ref={forwaredRef}
          savedData={this.loadData()}
          saveData={this.saveData}
        />
      );
    }
  }

  return React.forwardRef((props, ref) => (
    <Wrapper {...props} forwaredRef={ref} />
  ));
};

export default withLocalstorage;
