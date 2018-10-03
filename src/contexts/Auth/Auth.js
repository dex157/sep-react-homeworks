import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const initialState = {
  email: '',
  authorizeError: '',
  isAuthorized: false
};

class AuthProvider extends PureComponent {
  state = initialState;

  authorize = (email, password) => {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({
        email,
        authorizeError: '',
        isAuthorized: true
      });

      return;
    }
    this.setState({ authorizeError: 'Email или пароль введён не верно' });
  };

  logout = () => {
    this.setState(initialState);
  };

  getProviderValue = () => {
    const { email, authorizeError, isAuthorized } = this.state;

    return {
      email,
      authorizeError,
      isAuthorized,
      authorize: this.authorize,
      logout: this.logout
    };
  };
  render() {
    const { children } = this.props;

    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
