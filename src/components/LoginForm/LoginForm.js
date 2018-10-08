import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';

const inputs = [
  {
    name: 'email',
    label: 'Почта'
  },
  {
    name: 'password',
    label: 'Пароль'
  }
];

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAuth = () => {
    const { email, password } = this.state;
    const { authorize } = this.props;

    authorize(email, password);
  };

  render() {
    const { isAuthorized, authError } = this.props;

    return (
      <div className={styles.bg}>
        <div className={styles.form}>
          {inputs.map(input => (
            <p key={input.name}>
              <label htmlFor={input.name} className={styles.labelText}>
                {input.label}
              </label>
              <input
                type={input.name}
                name={input.name}
                className={styles.input}
                onChange={this.handleChange}
                value={this.state[input.name]}
              />
            </p>
          ))}
          {authError && <p className={styles.error}>{authError}</p>}
          <div className={styles.buttons}>
            <button className={styles.button} onClick={this.handleAuth}>
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
