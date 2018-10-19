import React, { Component } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';

import styles from './LoginForm.module.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleClick = () => {
    const { authorize } = this.props;
    const { email, password } = this.state;

    authorize(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  };

  render() {
    const { isAuthorized, authError } = this.props;
    const { email, password } = this.state;
    return (
      <div className={styles.bg}>
        <div className={classNames(styles.form, 't-form')}>
          <p>
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              name="email"
              className={classNames(styles.input, 't-input-email')}
              value={email}
              type="text"
              onChange={this.handleChange}
            />{' '}
          </p>
          <p>
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              name="password"
              className={classNames(styles.input, 't-input-password')}
              value={password}
              type="password"
              onChange={this.handleChange}
            />
          </p>
          {isAuthorized ? (
            <Redirect to="/app" />
          ) : (
            <p className={styles.error}>{authError}</p>
          )}
          <div className={styles.buttons}>
            <button
              onClick={this.handleClick}
              className={classNames(styles.button, 't-login')}
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
