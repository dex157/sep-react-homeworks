import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import style from './LoginForm.module.css';
import cls from 'classnames';
import { Redirect } from 'react-router-dom';

const inputs = [
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

  handlerChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    const { email, password } = this.state;
    const { authorize } = this.props;
    authorize(email, password);
  };

  render() {
    const { isAuthorized, authError } = this.props;
    return (
      <div className={style.bg}>
        <div className={cls(style.form, 't-form')}>
          {inputs.map(input => (
            <p key={input.name}>
              <label htmlFor={input.name}>
                <span className={style.labelText}>{input.label}</span>
              </label>
              <input
                type={input.type}
                name={input.name}
                className={cls(style.input, `t-input-${input.name}`)}
                onChange={this.handlerChange}
                value={this.state[input.name]}
              />
            </p>
          ))}
          {isAuthorized ? (
            <Redirect to="/app" />
          ) : (
            <p className={style.error}>{authError}</p>
          )}
          <div className={style.buttons}>
            <button
              onClick={this.submitForm}
              className={cls(style.button, 't-login')}
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
