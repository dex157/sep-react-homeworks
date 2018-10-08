import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = {
    inputs: {
      email: {
        name: 'Почта',
        value: ''
      },
      password: {
        name: 'Пароль',
        value: ''
      }
    }
  };

  handleOnChange = event => {
    const { inputs } = this.state;

    this.setState({
      inputs: {
        ...inputs,
        [event.target.name]: {
          ...inputs[event.target.name],
          value: event.target.value
        }
      }
    });
  };

  handleClickLogin = () => {
    const { authorize } = this.props;
    const {
      inputs: { email, password }
    } = this.state;

    authorize(email.value, password.value);
  };

  handleEnterKey = event => {
    if (event.key === 'Enter') {
      this.handleClickLogin();
    }
  };

  render() {
    const { inputs } = this.state;
    const { authError, isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/app" />;
    }
    
    return (
      
      <div className={styles.bg}>
        <div className={styles.form + ' t-form'}>
          {Object.keys(inputs).map(input => (
            <p key={[input]}>
              <label htmlFor={[input]}>
                <span className={styles.labelText}>{inputs[input].name}</span>
              </label>
              <input
                type="text"
                name={[input]}
                className={styles.input + ` t-input-${[input]}`}
                value={inputs[input].value}
                onChange={this.handleOnChange}
                onKeyPress={this.handleEnterKey}
              />
            </p>
          ))}

          {authError && <p className={styles.error}>{authError}</p>}

          <div className={styles.buttons}>
            <button
              className={styles.button + ' t-login'}
              onClick={this.handleClickLogin}
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
