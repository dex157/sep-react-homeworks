import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import style from './LoginForm.module.css'
import {Redirect} from 'react-router-dom';

class LoginForm extends Component {

    state = {
        email : '',
        password : ''
    }

    inputChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    buttonClick = () => {
        const {email, password} = this.state;
        const {authorize} =  this.props;

        authorize(email, password);
    }

    render() {
     const {email, password} = this.state;
     const {isAuthorized} =  this.props; 
      return (
        isAuthorized ?
        <Redirect from="/" to="/app" /> 
        :
        <div className = {style.bg}>
            <div className = {`${style.form} t-form`}>
                <p>
                    <label>
                        <span className = {style.labelText}>Почта</span>
                    </label>
                    <input 
                        type = "text" 
                        name = "email"
                        value = {email} 
                        onChange = {this.inputChange}
                        className = {`${style.input} t-input-email`}
                    />
                </p>
                <p>
                    <label>
                        <span className = {style.labelText}>Пароль</span>
                    </label>
                    <input 
                        type = "password" 
                        name = "password"
                        value = {password}
                        onChange = {this.inputChange}
                        className = {`${style.input} t-input-password`}
                    />
                </p>
                <div className = {style.buttons}>
                    <button 
                        className = {`${style.button} t-login`}
                        onClick = {this.buttonClick} 
                    >
                    Войти
                    </button>
                </div>
            </div>
        </div>);
    }
}

export default withAuth(LoginForm);