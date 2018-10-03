import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: null,
    authorizeError: '',
    isAuthorized: false,
    credits: {
      email: 'stu@dent.com',
      password: '123'
    }
  };

  authorize = (inputEmail, inputPassword) => {
    const {
      credits: { email, password }
    } = this.state;

    if (inputEmail === email && inputPassword === password) {
      this.setState({
        email: inputEmail,
        isAuthorized: true,
        authorizeError: ''
      });
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => {
    this.setState({
      email: null,
      isAuthorized: false
    });
  };

  getProviderValue = () => {
    const { email, isAuthorized, authorizeError } = this.state;
    const { authorize, logout } = this;

    return { email, isAuthorized, authorizeError, authorize, logout };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
