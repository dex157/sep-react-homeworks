import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { withAuth } from '../../context/Auth'
import cn from 'classnames'
import styles from './LoginForm.module.css'

const fields = [
    {
        name: 'email',
        type: 'text',
        label: 'Почта',
    },
    {
        name: 'password',
        type: 'password',
        label: 'Пароль',
    }
]

class LoginForm extends PureComponent {
    state = {
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = () => {
        const { email, password } = this.state;
        const { authorize } = this.props;
        
        authorize(email, password)
    }

    render() {
        const { state } = this;
        const { isAuthorized, authError } = this.props;

        console.log('render LoginForm')

        if(isAuthorized) {
            return <Redirect to='/app' />
        }

        return (
            <div className={styles.bg}>
                <div className={cn(styles.form, 't-form')}>
                    {
                        fields.map(({name, type, label}) => {
                            return (
                                <p key={name}>
                                    <label className={styles.labelText} htmlFor={name}>{label}</label>
                                    <input
                                        name={name}
                                        type={type} 
                                        className={cn(styles.input, `t-input-${name}`)}
                                        value={state[name]}
                                        onChange={this.handleChange}
                                    />
                                </p>
                            );
                        })
                    }

                    {
                         authError && <p className={styles.error}>{authError}</p>
                    }

                    <div className={styles.buttons}>
                        <button className={cn(styles.button, 't-login')} onClick={this.handleSubmit}>Войти</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withAuth(LoginForm)