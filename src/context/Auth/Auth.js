import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext('');

class AuthProvider extends Component {
  email = 'test@test.ru';
  password = '321';

  state = {
    isAuthorized: false,
    authError: ''
  };

  authorize = (email, password) => {
    if (email === this.email && password === this.password) {
      this.setState({ isAuthorized: true, authError: '' });
    } else {
      this.setState({ authError: 'Почта или пароль не верные' });
    }
  };

  getProviderValue = () => {
    const { isAuthorized, authError } = this.state;
    return { isAuthorized, authorize: this.authorize, authError };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const withAuth = WrappedComponent => {
  class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <Consumer>
          {contextProps => <WrappedComponent {...contextProps} {...rest} />}
        </Consumer>
      );
    }
  }

  return AuthHOC;
};

export { AuthProvider, withAuth };
