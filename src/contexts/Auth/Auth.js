import React, { PureComponent } from "react";

const { Provider, Consumer: AuthConsumer } = React.createContext("");

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: ''
  };

  authorize = (email, password) => {
    if (email === "stu@dent.com" && password === "123") {
      this.setState({ isAuthorized: true, email: email, authorizeError: ''});
    } else {
      this.setState({ authorizeError: 'Email или пароль введён не верно' });
    }
  };

  logout = ()=> {
    this.setState({isAuthorized: false});
  };

  getProviderValue = ()=>{
    const {isAuthorized, authorizeError, email} = this.state;

    return {
      isAuthorized: isAuthorized,
      authorize: this.authorize,
      authorizeError: authorizeError,
      logout: this.logout,
      email: email
    }
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
