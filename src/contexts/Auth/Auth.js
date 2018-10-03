import React, { PureComponent } from 'react';
import { initialState } from '../../constants';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    isAuthorized: false,
    authorizeError: ''
  }

  authorize = (email , password) => {
    if ((email === initialState.email) && (password === initialState.password)) {
      this.setState({
        email: email,
        isAuthorized: true,
        authorizeError: ''
      });
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => {
      this.setState({
        email: '',
        isAuthorized: false,
        authorizeError: ''
      });
  };

  getProviderValue = () => {
    const { email, isAuthorized, authorizeError } = this.state;

    return {
      email,
      isAuthorized,
      authorizeError,
      authorize: this.authorize,
      logout: this.logout
    };
  };

  render() {
    const { children } = this.props;
    
    return (
      <Provider value={this.getProviderValue()}>
        {children}
      </Provider>
    );
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
