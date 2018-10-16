import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';

const formFields = [
  {
    label: 'Почта',
    name: 'email',
    type: 'text'
  },
  {
    label: 'Пароль',
    name: 'password',
    type: 'password'
  }
];

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  onClick = () => {
    const { email, password } = this.state;
    const { authorize } = this.props;

    authorize(email, password);
  };

  renderForm = field => {
    const state = this.state;

    return (
      <p key={field.name}>
        <label htmlFor={field.name}>
          <span className={styles.labelText}>{field.label}</span>
        </label>
        <input
          type={field.type}
          name={field.name}
          value={state[field.name]}
          onChange={this.onChange}
          className={styles.input + ` t-input-${field.name}`}
        />
      </p>
    );
  };

  render() {
    const { authError, isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/app" />;
    }

    return (
      <div className={styles.bg}>
        <div className={styles.form + ' t-form'}>
          {formFields.map(this.renderForm)}

          {authError && <p className={styles.error}>{authError}</p>}

          <div className={styles.buttons}>
            <button
              onClick={this.onClick}
              className={styles.button + ' t-login'}
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
