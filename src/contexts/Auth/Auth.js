import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state={
    isAuthorized: false,
    email: '',
    password: '',
    authorizeError: '',
  }

  authorize = (email, password) => {
    if(email === 'stu@dent.com' && password === 123){
      this.setState({
        isAuthorized: true,
        email: '',
        password: '',
        authorizeError: ''
      })
    } else {
      this.setState({
        isAuthorized: false,
        email: email,
        password: password,
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  }

  logout = () => {
    this.setState({
      isAuthorized: false,
      email: '',
      password: '',
      authorizeError: ''
    })
  }

  getProviderValue = () => {

  }

  render() {
    const { children } = this.props;
    const { isAuthorized } = this.state;
    return (
      // <Provider value={{isAuthorized, authorize: this.authorize}}>{children}</Provider>
      <Provider>{children}</Provider>
      );
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
