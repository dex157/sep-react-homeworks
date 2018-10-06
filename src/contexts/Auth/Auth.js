import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  authorize(mail, password) {
      if(mail === 'stud@dent.com' && password === '123'){
          this.setState({
              isAuthorized: true
          })
      }

  }
  logout() {
      return;
  }
  getProviderValue() {
      return;
  }
  render() {
    const { children } = this.props;
    return <Provider>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
