import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';

const inputs = [
  {
    name: 'email',
    inputName: 'Почта',
    type: 'text'
  },
  {
    name: 'password',
    inputName: 'Пароль',
    type: 'password'
  }
];

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  formSubmit = () => {
    const { email, password } = this.state,
      { authorize } = this.props;

    authorize(email, password);
  };

  changeHandler = e => {
    const value = e.target.value,
      name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const state = this.state,
      { isAuthorized, authError } = this.props;

    return (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          {inputs.map(input => (
            <p key={input.name}>
              <label htmlFor={input.name}>
                <span className={styles.labelText}>{input.inputName}</span>
              </label>
              <input
                type={input.type}
                name={input.name}
                className={`${styles.input} t-input-${input.name}`}
                onChange={this.changeHandler}
                value={state[input.name]}
              />
            </p>
          ))}
          {isAuthorized ? (
            <Redirect to="/app" />
          ) : authError !== '' ? (
            <p className={styles.error}>{authError}</p>
          ) : null}
          <div className={styles.buttons}>
            <button
              className={`${styles.button} t-login`}
              onClick={this.formSubmit}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
