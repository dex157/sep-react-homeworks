import React, { PureComponent } from 'react';

const validDate = {
    email: 'stu@dent.com',
    password: '123'
}

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
    state = {
        isAuthorized: false,
        authorizeError: '',
        email: '',
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
            logout: this.logout,
        }
    }

    authorize = (email, password) => {
        if (email === validDate.email && password === validDate.password) {
            this.setState(state => ({ 
                isAuthorized: true,
                email: email,
                authorizeError: ''
            }))
        } else {
            this.setState(state => ({ 
                authorizeError: 'Email или пароль введён не верно'
            }))
        }
    }

    logout = () => {
        this.setState(state => ({
            isAuthorized: false,
            email: '',
        }))
    }

    render() {
        const { children } = this.props;

        return (
            <Provider value={this.getProviderValue()}>
                {children}
            </Provider>)
    }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
