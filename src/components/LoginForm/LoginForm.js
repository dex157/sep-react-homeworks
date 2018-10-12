import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import style from './LoginForm.module.css';
import cls from 'classnames';
import AppRouter from '../AppRouter';
import { Redirect } from 'react-router-dom';

const inputs = [
  {
    name: 'email',
    text: 'Почта',
    type: 'text'
  },
  {
    name: 'password',
    text: 'Пароль',
    type: 'password'
  }
];

class LoginForm extends Component {
  state = {
    login: '',
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
          {inputs.map(input => {
            return (
              <p key={input.name}>
                <label htmlFor={input.name}>
                  <span className={style.labelText}>{input.text}</span>
                </label>
                <input
                  type={input.type}
                  name={input.name}
                  className={cls(style.input, 't-input-email')}
                  onChange={this.handlerChange}
                  value={this.state[input.name]}
                />
              </p>
            );
          })}
          {isAuthorized ? (
            <Redirect to="app" component={AppRouter} />
          ) : (
            <p className={style.error}>{authError}</p>
          )}
          <div className={style.buttons}>
            <button onClick={this.submitForm} className={style.button}>
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
