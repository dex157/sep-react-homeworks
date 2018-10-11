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

  componentDidUpdate(prevProps) {
    const { isAuthorized, history } = this.props;

    if(prevProps.isAuthorized !== isAuthorized) {
      history.push('/app');
    }
  }

  render() {
    const { authError } = this.props;
    const { ...state } = this.state;

    return (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          {inputs.map(input => (
            <p key={input.name}>
              <label htmlFor={input.name}>
                <span className={styles.labelText}>
                  {input.label}
                </span>
              </label>
              <input
                type={input.name}
                name={input.name}
                className={`${styles.input} t-input-${input.name}`}
                onChange={this.handleChange}
                value={state[input.name]}
              />
            </p>
          ))}
          {authError && <p className={styles.error}>{authError}</p>}
          <div className={styles.buttons}>
            <button className={`${styles.button} t-login`} onClick={this.handleAuth}>
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
