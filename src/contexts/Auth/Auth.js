import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state={
    isAuthorized: false,
    email: '',
    authorizeError: ''
  };

  authorize = (email, password) => {
    if(email === 'stu@dent.com' && password === '123') {
      this.setState({
        isAuthorized: true,
        email: email,
        authorizeError: ''
      })
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  };

  logout = () => {
    this.setState({
      isAuthorized: false,
      email: '',
      authorizeError: ''
    })
  };

  getProviderValue = () => {
    const { isAuthorized, email, authorizeError } = this.state;
    return {
      isAuthorized,
      email,
      authorizeError,
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