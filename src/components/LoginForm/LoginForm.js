import React, { Component } from 'react';
import { withAuth } from './../../context/Auth';
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

  changeHandler = event => {
    const name = event.target.name,
      value = event.target.value;
    if (value) {
      this.setState({
        [name]: value
      });
    }
  };
  formSubmit = () => {
    const { email, password } = this.state;
    const { authorize } = this.props;
    authorize(email, password);
  };

  render() {
    const state = this.state;
    const { isAuthorized, authError } = this.props;

    return (
      <div className={styles.bg}>
        <div className={`t-${styles.form} t-form`}>
          {inputs.map(input => (
            <div key={input.name}>
              <label htmlFor={input.name}>
                <span className={styles.labelText}>{input.inputName}</span>
              </label>
              <input
                name={input.name}
                className={`${styles.input} t-input-${input.name}`}
                placeholder={input.inputName}
                type={input.type}
                onChange={this.changeHandler}
                value={state[input.name]}
              />
            </div>
          ))}
          {isAuthorized ? (
            <Redirect to="/app" />
          ) : authError !== '' ? (
            <p className={styles.error}>{authError}</p>
          ) : null}
          <button
            className={`${styles.button} t-login`}
            onClick={this.formSubmit}
          >
            Войти
          </button>
        </div>
      </div>
    );
  }
}
export default withAuth(LoginForm);
