import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import styles from 'components/LoginForm/LoginForm.module.css';
import { Redirect } from 'react-router-dom';

const input = [
  {
    name: 'email',
    label: 'Почта',
    type: 'text'
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password'
  }
];

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  inputChangeHandler = e => {
    const value = e.target.value,
      name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  formSendHandler = () => {
    const { email, password } = this.state,
      { authorize } = this.props;
    authorize(email, password);
  };

  render() {
    console.log(styles);
    const state = this.state,
      { isAuthorized, authError } = this.props;
    return (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          {input.map(input => (
            <p key={input.name}>
              <label htmlFor={input.name}>
                <span className={styles.labelText}>{input.label}</span>
              </label>
              <input
                type={input.type}
                name={input.name}
                className={`${styles.input} t-input-${input.name}`}
                onChange={this.inputChangeHandler}
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
              onClick={this.formSendHandler}
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
