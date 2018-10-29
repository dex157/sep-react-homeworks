import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';

let fields = [
  {
    id: 1,
    name: 'email',
    label: 'Почта',
    type: 'text'
  },
  {
    id: 2,
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

  handleSubmit = () => {
    const { authorize } = this.props;
    const { email, password } = this.state;
    authorize(email, password);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { isAuthorized, authError } = this.props;
    const state = this.state;

    if (isAuthorized) {
      return <Redirect to="/app" />;
    }

    return (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          {fields.map(({ id, name, label, type }) => (
            <p key={id} className="field">
              <label className="field__label" htmlFor={name}>
                <span className={styles.labelText}>{label}</span>
              </label>
              <input
                id={name}
                className={`${styles.input} t-input-${name}`}
                type={type}
                name={name}
                value={state[name]}
                onChange={this.handleChange}
              />
            </p>
          ))}
          {authError !== '' && <p className={styles.error}>{authError}</p>}
          <div className={styles.buttons}>
            <button
              onClick={this.handleSubmit}
              className={`${styles.button} t-login`}
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
