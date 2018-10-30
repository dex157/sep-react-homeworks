import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';

const fields = [
  {
    name: 'email',
    label: 'Почта',
    type: 'text',
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
  }
];

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onFormSubmit = () => {
    const { email, password } = this.state;
    const { authorize } = this.props;

    authorize(email, password);
  }

  onInputChange = evt => {
    const {name, value} = evt.target;

    this.setState({
      [name]: value
    });
  }

  renderForm = () => {
    const state = this.state;

    return (
      fields.map(item => (
        <p key={item.name}>
          <label htmlFor={item.name}>
            <span className={styles.labelText}>
              {item.label}
            </span>
          </label>
          <input
            className={styles.input + ` t-input-${item.name}`}
            type={item.type}
            name={item.name}
            value={state[item.name]}
            onChange={this.onInputChange}
          />
        </p>
      ))
    );
  }

  render() {
    const { isAuthorized, authError } = this.props;

    return (
      isAuthorized 
        ? <Redirect to="/app" />
        : (<div className={styles.bg}>
          <div className={styles.form + ' t-form'}>
            {this.renderForm()}
            {
              authError !== ''
              ? (
                <p className={styles.error}>
                  {authError}
                </p>
              ) : null
            }
            <div className={styles.buttons}>
              <button 
                className={styles.button + ' t-login'}
                onClick={this.onFormSubmit}
                children='Войти'
              />
            </div>
          </div>
        </div>
      )
    );
  }
}

export default withAuth(LoginForm);