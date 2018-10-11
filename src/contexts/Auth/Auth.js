import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  }
  authorize = (email, password) => {
    if(email === 'stu@dent.com' && password === '123'){
      this.setState({
        email: email,
        authorizeError: '',
        isAuthorized: true
      })
    } else {
      this.setState({
        email: '',
        authorizeError: 'Email или пароль введён не верно',
        isAuthorized: false
      })
    }
  }
  logout = () => {

  }
  getProviderValue = () => {
    let {email, authorizeError, isAuthorized} = this.state;
    return {
      email: email,
      isAuthorized: isAuthorized,
      authorizeError: authorizeError,
      authorize: this.authorize,
      logout: this.logout
    }
  }
  logout = () => {
    this.setState({
      email: '',
      authorizeError: '',
      isAuthorized: false
    })
  }
  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
