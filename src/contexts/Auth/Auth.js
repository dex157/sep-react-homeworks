import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    isAuthorized: false,
    authorizeError: '',
    authorize: this.authorize.bind(this),
    logout: this.logout.bind(this)
  };

  authorize(email, password) {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({ email, isAuthorized: true, authorizeError: '' });
    } else {
      this.setState({
        email: '',
        isAuthorized: false,
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  }

  logout() {
    this.setState({ isAuthorized: false });
  }

  getProviderValue() {
    return this.state;
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
