import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    password: '',
    authorizeError: '',
    isAuthorized: false
  };

  constructor(props) {
    super(props);
    this.authorize = this.authorize.bind(this);
    this.logout = this.logout.bind(this);
  }

  authorize(email, password) {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({
        isAuthorized: true,
        authorizeError: '',
        email: email
      });
    } else {
      this.setState({ authorizeError: 'Email или пароль введён не верно' });
    }
  }

  logout() {
    this.setState({ isAuthorized: false });
  }

  getProviderValue() {
    const { email, authorizeError, isAuthorized } = this.state;
    return {
      email,
      authorizeError,
      isAuthorized,
      authorize: this.authorize,
      logout: this.logout
    };
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
