import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import { InitialState } from './InitialState';

class LoginForm extends Component {
    state = InitialState

    handleChange = event => {
        const { email, password } = this.state;
        
        switch (event.target.name) {
            case email.nameEn:
                this.setState({ email: {...email, value: event.target.value }});
                break;
            case password.nameEn:
                this.setState({ password: {...password, value: event.target.value }});
                break;
            default: break;
        }
    }

    handleEnterKey = event => {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }

    handleSubmit = () => {
        const { email, password } = this.state;
        const { authorize } = this.props;

        authorize(email.value, password.value);
    }

    renderForm = () => {
        const state = this.state;

        return (
            Object.keys(state).map(lstate => (
                <p key={state[lstate].nameEn}>
                    <label htmlFor={state[lstate].nameEn}>
                        <span className={styles.labelText}>
                            {state[lstate].nameRu}
                        </span>
                    </label>
                    <input 
                        type={state[lstate].type}
                        name={state[lstate].nameEn}
                        className={styles.input + ` t-input-${state[lstate].nameEn}`}
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnterKey}
                        value={state[lstate].value} />
                </p>
            ))
        )
    }

    render() {
        const { isAuthorized, authError } = this.props;

        return (
            isAuthorized 
                ? <Redirect to="/app" />
                : (<div className={styles.bg}>
                    <div className={styles.form + ' t-form'}>
                        {this.renderForm()}
                        { authError === '' 
                            ? null 
                            : ( <p className={styles.error}>
                                {authError}
                            </p> )
                        }
                        <div className={styles.buttons}>
                            <button 
                                className={styles.button + ' t-login'}
                                onClick={this.handleSubmit}>
                                Войти
                            </button>
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default withAuth(LoginForm);