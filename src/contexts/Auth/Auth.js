import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const validValues = {
  email: "stu@dent.com",
  password: "123"
}

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: ''
  }

  authorize = (email, password) => {
    if (email === validValues.email && password === validValues.password)
      this.setState({
        isAuthorized: true,
        authorizeError: "",
        email: email
      })
    else this.setState({
      authorizeError: "Email или пароль введён не верно",
    })
  }

  logout = () => {
    this.setState({
      isAuthorized: false,
      email: ''
    })
  }

  getProviderValue = () => {
    const {
      isAuthorized,
      authorizeError,
      email,
    } = this.state

    return {
      isAuthorized,
      authorizeError,
      email,
      authorize: this.authorize,
      logout: this.logout
    }
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
