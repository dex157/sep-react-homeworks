import React, { PureComponent } from 'react';

const defaultUser = {
  email: 'stu@dent.com',
  password: '123',
}


const { Provider, Consumer: AuthConsumer } = React.createContext();

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: '',
  }

  logout = () => {
    this.setState({
      isAuthorized: false,
    });
  }

  authorize = (email, password) => {
    if (defaultUser.email === email && defaultUser.password === password) {
      this.setState({
        isAuthorized: true,
        authorizeError: '',
        email,
      });
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно',
      });
    }
  }

  getProviderValue = () => {
    const { isAuthorized, authorizeError, email } = this.state;
    return {
      isAuthorized, 
      authorize: this.authorize, 
      authorizeError,
      logout: this.logout,
      email,
    }
  }
  
  render() {  
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
