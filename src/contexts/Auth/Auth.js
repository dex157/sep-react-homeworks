import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    isAuthorized: false,
    authorizeError: ''
  };

  authorize = (email, password) => {
    if ((email === 'stu@dent.com') && password === '123') {
      this.setState({ isAuthorized: true, email: email, authorizeError: '' });
    } else {
      this.setState({
        isAuthorized: false,
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => {
    this.setState({
      email: '',
      isAuthorized: false,
      authorizeError: ''
    });
  };

  getProviderValue = () => {
    const { isAuthorized, authorizeError, email } = this.state;

    return {
      email,
      isAuthorized,
      authorizeError,
      authorize: this.authorize,
      logout: this.logout,
      sendError: this.sendError
    };
  };

  render() {
    const { children } = this.props;

    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
