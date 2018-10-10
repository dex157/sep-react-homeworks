import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: "",
    authorizeError: "",
    isAuthorized: false
  }
  render() {
    const { children } = this.props;
    return <Provider value={{...this.state, logout: this.logout, authorize: this.authorize}}>{children}</Provider>;
  }

  authorize = (email, password) => {
    if(email && password) {
      email === "stu@dent.com" && password === "123" ? (
        this.setState({
        email,
        authorizeError: "",
        isAuthorized: true
      })) : (this.setState({
        email,
        authorizeError: "Email или пароль введён не верно",
      }))
      
    } else {
      this.setState({
        authorizeError: 'some error'
      });
    }
  }

  logout = () => {
    this.setState({
      email:"",
      authorizeError: "",
      isAuthorized: false
    })
  }

  getProviderValue = () => {
    const authorize = this.authorize;
    const logout = this.logout;
    return {...this.state, authorize, logout};
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
