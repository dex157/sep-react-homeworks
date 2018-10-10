import React, {Component} from 'react';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';

const inp = [
    {
        name: 'email',
        ruName: 'Почта',
        type: 'text'
    },
    {
        name: 'password',
        ruName: 'Пароль',
        type: 'password'
    }
]

class LoginForm extends Component {
    state={
        email: '',
        password: ''
    }

    inpChangeHandler = (e) => {
        const value = e.target.value,
              name = e.target.name;

        this.setState({
            [name]: value
        })
    }

    formSendHandler = () => {
        const {email, password} = this.state,
              { authorize} = this.props;

        authorize(email, password);
    }

    render() {
        const state = this.state,
              {isAuthorized, authError} = this.props;

        return (
            <div className={styles.bg}>
                <div className={`${styles.form} t-form`}>
                    {inp.map((inp) => (
                        <p key={inp.name}>
                            <label htmlFor={inp.name}>
                                <span className={styles.labelText}>{inp.ruName}</span>
                            </label>
                            <input type={inp.type} name={inp.name} className={`${styles.input } t-input-${inp.name}`} onChange={this.inpChangeHandler} value={state[inp.name]}/>
                        </p>
                    ))}
                    {isAuthorized ? <Redirect to='/app' /> : authError !== '' ? <p className={styles.error}>{authError}</p> : null}
                    <div className={styles.buttons}>
                        <button className={`${styles.button} t-login`} onClick={this.formSendHandler}>Войти</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth(LoginForm);