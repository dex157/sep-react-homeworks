import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, value) => WrappedComponent => {
    class LocHoc extends Component {
       savedData = () => {
        return load(localStorageKey)||value;
      };
      saveData = data => {
        save(localStorageKey, data);
        this.forceUpdate();
      };
       render() {
        const { forwardedRef } = this.props;
         return (
          <WrappedComponent
            ref={forwardedRef}
            saveData={this.saveData}
            savedData={this.savedData()}
          />
        );
      }
    }
     return React.forwardRef((props, ref) => (
      <LocHoc {...props} forwardedRef={ref} />
    ));
    }

export default withLocalstorage;
