import React, {Component} from 'react';
import "./LoginForm.module.css";

class LoginForm extends Component{
    render(){
        return(
            <div className="bg">
                <div className="form">
                    <p>
                        <label htmlFor="email">
                            <span className="labelText">Почта</span>
                        </label>
                        <input type="text" name="email" className="input t-input-email" value="" />
                    </p>
                    <p>
                        <label htmlFor="password">
                            <span className="labelText">Пароль</span>
                        </label>
                        <input type="password" name="password" className="input t-input-password" value="" />
                    </p>
                    <div className="buttons">
                        <button className="button t-login">Войти</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;