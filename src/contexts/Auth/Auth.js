import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
    state = {
        email: '',
        authorizeError: '',
        isAuthorized: false
    };

    constructor(props){
        super(props);
        this.authorize = this.authorize.bind(this);
        this.logout = this.logout.bind(this);
    }

    authorize(mail, password) {
        if (mail === 'stu@dent.com' && password === '123') {
            this.setState({
                email: mail,
                authorizeError: '',
                isAuthorized: true
            })
        } else {
            this.setState({
                authorizeError: 'Email или пароль введён не верно',
            })
        }
    }

    logout() {
        this.setState({
            isAuthorized: false
        })
    }

    getProviderValue() {
        return {
            email: this.state.email,
            authorizeError: this.state.authorizeError,
            isAuthorized: this.state.isAuthorized,
            authorize: this.authorize,
            logout: this.logout,
        }
    }

    render() {
        const {children} = this.props;
        return <Provider value={this.getProviderValue()}>{children}</Provider>;
    }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
