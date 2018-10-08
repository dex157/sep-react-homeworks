import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: false,
      authorizeError: '',
      email: ''
    };
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
      this.setState({
        isAuthorized: false,
        authorizeError: 'Email или пароль введён не верно',
        email: ''
      });
    }
  }

  logout() {
    this.setState({
      isAuthorized: false,
      authorizeError: '',
      email: ''
    });
  }

  getProviderValue() {
    return {
      isAuthorized: this.state.isAuthorized,
      authorize: this.authorize,
      authorizeError: this.state.authorizeError,
      email: this.state.email,
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
