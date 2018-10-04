import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, initialValue) => WrappedComponent => {
  return class withLocalstorage extends Component {
    state = {
      isLoaded: false,
      data: initialValue
    };

    saveData = data => {
      save(key, data);
      this.setState({ data });
    };

    componentDidMount() {
      let data = load(key);
      if (!data) {
        data = initialValue;
      }
      this.setState({ data, isLoaded: true });
    }

    render() {
      const { isLoaded, data } = this.state;

      return isLoaded ? (
        <WrappedComponent
          {...this.props}
          savedData={data}
          saveData={this.saveData}
        />
      ) : null;
    }
  };
};

export default withLocalstorage;
