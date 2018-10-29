import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { withAuth } from '../../context/Auth'

class LoginForm extends Component{
    state = {
        email: '',
        password: '',
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleSubmit = () => {
        const { authorize } = this.props;
        const { email, password } = this.state;
        authorize(email, password);
    }

    render(){
        const { state } = this;
        const { authError, isAuthorized } = this.props;
        return(
            <div className={styles.bg}>
                <div className={`${styles.form} t-form`}>
                    <p>
                        <label htmlFor="email">
                            <span className={`${styles.labelText}`}>Почта</span>
                        </label>
                        <input type="text" name="email" className={`${styles.input} t-input-email`} value={state.email} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label htmlFor="password">
                            <span className={`${styles.labelText}`}>Пароль</span>
                        </label>
                        <input type="password" name="password" className={`${styles.input} t-input-password`} value={state.password} onChange={this.handleChange} />
                    </p>
                    {isAuthorized ? (
                        <Redirect to="/app" />
                    ) : authError !== '' ? (
                        <p className={styles.error}>{authError}</p>
                    ) : null
                    }
                    <div className={`${styles.buttons}`}>
                        <button className={`${styles.button} t-login`} onClick={this.handleSubmit}>Войти</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withAuth(LoginForm);