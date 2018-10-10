import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import { withAuth } from '../../context/Auth';
import cls from 'classnames';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    inputs: {
      email: {
        inputName: 'Почта',
        inputValue: ''
      },
      password: {
        inputName: 'Пароль',
        inputValue: ''
      }
    }
  };

  handleSubmit = () => {
    const { authorize } = this.props;
    const {
      inputs: { email, password }
    } = this.state;

    authorize(email.Inputvalue, password.Inputvalue);
  };

  handleChange = e => {
    const { inputs } = this.state;

    this.setState({
      inputs: {
        ...inputs,
        [e.target.name]: {
          ...inputs[e.target.name],
          inputValue: e.target.value
        }
      }
    });
  };

  render() {
    const { inputs } = this.state;
    const { authError, isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="/app" />;
    }
    return (
      <div className={styles.bg}>
        <div className={cls(styles.form, ' t-form')}>
          {Object.keys(inputs).map(input => (
            <p key={[input]}>
              <label htmlFor={[input]}>
                <span className={styles.labelText}>
                  {inputs[input].inputName}
                </span>
              </label>
              <input
                type="text"
                name={[input]}
                className={cls(styles.input, ` t-input-${[input]}`)}
                value={inputs[input].inputValue}
                onChange={this.handleChange}
              />
            </p>
          ))}

          {authError && <p className={styles.error}>{authError}</p>}

          <div className={styles.buttons}>
            <button
              className={cls(styles.button, ' t-login')}
              onClick={this.handleSubmit}
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
