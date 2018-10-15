import React, { Component } from 'react';
import { withAuth } from '../../context/Auth'
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
    state = {
        email: '',
        passwd: ''
    }

    handlerEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlerPasswdChange = (event) => {
        this.setState({passwd: event.target.value});
    }

    handlerSubmit = () => {
        const { authorize } = this.props,
              { email, passwd } = this.state;

        authorize (email, passwd);
    }

    render(){
        const { email, passwd } = this.state,
              { authError, isAuthorized } = this.props;

        if (!isAuthorized) {
            return(
                <div className = {styles.bg}>
                    <div className = {styles.form}>
                        <p key = "email">
                            <label htmlFor = "email">
                                <span className = { styles.labelText }>Почта</span>
                            </label>
                            <input type = "text" name = "email" className = {`${styles.input} t-input-email`} value = {email} onChange = {this.handlerEmailChange}></input>
                        </p>

                        <p key = "password">
                            <label htmlFor = "password">
                                <span className = { styles.labelText }>Пароль</span>
                            </label>
                            <input type = "text" name = "password" className = {`${styles.input} t-input-password`} value = {passwd} onChange = {this.handlerPasswdChange}></input>
                        </p>

                        { authError && <p className = { styles.error } >{ authError }</p> }

                        <div className = { styles.buttons }>
                            <button className = { styles.button } onClick = { this.handlerSubmit } >Войти</button>
                        </div>
                    </div>  
                </div>
            )
        } else {
            return (
                <Redirect to = "/app" />
            );
        }
    }
}

export default withAuth(LoginForm);