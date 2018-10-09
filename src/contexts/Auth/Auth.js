import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const trueData = {
  email: 'stu@dent.com',
  password: '123'
} 

class AuthProvider extends PureComponent {

  state = {
    email : "",
    authorizeError : "",
    isAuthorized : false
  }

  authorize = (email, password) => {
    if(email !== trueData.email || password !== trueData.password){
      this.setState({authorizeError : "Email или пароль введён не верно"})
    }else{
      this.setState({email : email})
      this.setState({isAuthorized : true})
      this.setState({authorizeError : ""})
    }

  }
  
  logout = () => {
    this.setState({isAuthorized : false})
  }

  getProviderValue = () => {
    const {isAuthorized, authorizeError,email} =  this.state;
    return( {
      isAuthorized: isAuthorized, 
      authorize : this.authorize, 
      authorizeError : authorizeError, 
      email : email, 
      logout : this.logout
    });
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>
      {children}
      </Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
