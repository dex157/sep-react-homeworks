import React, { PureComponent } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import css from './LoginForm.module.css';

class LoginForm extends PureComponent {
    state = {
        email: '',
        password: ''
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleEnter = () => {
        const { email, password } = this.state;
        const { authorize } = this.props;

        authorize(email, password);
    };
    render() {
        const { authError, isAuthorized } = this.props;
        const { email, password } = this.state;
        return !isAuthorized ? (
            <div className={css.bg}>
                <div className={`${css.form} t-form`}>
                    <p>
                        <label htmlFor="email">
                            <span className={css.labelText}>Почта</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            className={`${css.input} t-input-email`}
                            value={email}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="password">
                            <span className={css.labelText}>Пароль</span>
                        </label>
                        <input
                            type="text"
                            name="password"
                            className={`${css.input} t-input-password`}
                            value={password}
                            onChange={this.handleChange}
                        />
                    </p>

                    {authError && <p className={css.error}>{authError}</p>}

                    <div className={css.buttons}>
                        <button onClick={this.handleEnter} className={`${css.button} t-login`}>
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        ) : (
            <Redirect to="/app" />
        );
    }
}

export default withAuth(LoginForm);
