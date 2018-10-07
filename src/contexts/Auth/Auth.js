import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: ''
  }

  defaultUser = {
    email: 'stu@dent.com',
    password: '123'
  }

  render() {
    const { children } = this.props;
    
    return <Provider value = { this.getProviderValue() }>{children}</Provider>;
  }

  authorize = (email, password) => {
    const defaultUser = this.defaultUser;
 
    if ((email === defaultUser.email) && (password === defaultUser.password)) {
      this.setState({
        isAuthorized: true,
        authorizeError: '',
        email: email
      });
    } else {
      this.setState({authorizeError: 'Email или пароль введён не верно'});
    }
  }

  logout = () => {
    this.setState({
      isAuthorized: false,
      authorizeError: '',
      email: ''
    });
  }

  getProviderValue = () => {
    const {isAuthorized, authorizeError, email} = this.state;
    return ({
      isAuthorized,
      authorizeError,
      email,
      authorize: this.authorize,
      logout: this.logout
    });
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
