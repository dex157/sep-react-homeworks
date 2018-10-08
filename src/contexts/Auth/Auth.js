import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
    state = {
        isAuthorized: false,
        authorizeError: '',
        email: 'stu@dent.com',
        pass: '123'
    };
    getProviderValue = () => {
        const { isAuthorized, authorizeError, email } = this.state;
        return {
            isAuthorized,
            authorizeError,
            email,
            logout: this.logout,
            authorize: this.authorize
        };
    };
    logout = () => {
        this.setState({
            isAuthorized: false
        });
    };
    authorize = (email, password) => {
        if (email === this.state.email && password === this.state.pass) {
            this.setState({
                isAuthorized: true,
                authorizeError: ''
            });
        } else {
            this.setState({
                authorizeError: 'Email или пароль введён не верно'
            });
        }
    };
    render() {
        const { children } = this.props;
        return <Provider value={this.getProviderValue()}>{children}</Provider>;
    }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
