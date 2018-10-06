import React, { Component } from 'react';
import data from './mailData';
const { Provider, Consumer } = React.createContext('');

class DataProvider extends Component {
  getProviderValue = () => {
    return { data };
  };
  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const withData = WrappedComponent => {
  return class DataHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <Consumer>
          {({ data }) => <WrappedComponent {...rest} data={data} />}
        </Consumer>
      );
    }
  };
};

export { DataProvider, withData };
