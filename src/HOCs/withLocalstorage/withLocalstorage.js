import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (currentStorage, emptyStorage) => (WrappedComponent) => {
    
    return class extends Component {
        constructor(props) {
          super(props);
          this.state = {
            savedData: load(currentStorage) || emptyStorage
          };
        }
    
        saveData = values => {
          save(currentStorage, values);
          this.setState({ savedData: load(currentStorage) });
        };
    
        render() {
          const { savedData } = this.state;
    
          return (
            <WrappedComponent saveData={this.saveData} savedData={savedData} />
          );
        }
      };
};

export default withLocalstorage;
