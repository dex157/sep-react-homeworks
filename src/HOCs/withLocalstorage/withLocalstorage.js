import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (keyStorage, defaultStorage) => WrappedComponent => {
  class WithLocalStorage extends Component {
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
      // const { forwardRef, ...rest } = this.props;
      // console.log('withLocalstorage->', rest);
      // <WrappedComponent
      //   ref={forwardRef}
      //   {...rest}
      //   saveData={this.saveData}
      //   savedData={savedData}
      // />

      return (
        <WrappedComponent
          {...rest}
          saveData={this.saveData}
          savedData={savedData}
        />
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithLocalStorage {...props} forwardRef={ref} />;
  });
};

export default withLocalstorage;
