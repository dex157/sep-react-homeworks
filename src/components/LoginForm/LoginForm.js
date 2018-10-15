import React from 'react';
import styles from './LoginForm.module.css';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';

const fields = [
  {
    id: 'email',
    label: 'Почта',
    type: 'text'
  },
  {
    id: 'password',
    label: 'Пароль',
    type: 'password'
  }
];

class LoginForm extends React.Component {
  state = {    
    email: '',
    password: '',    
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = () => {
    const { authorize } = this.props;
    const { email, password } = this.state;
    authorize(email, password);
  }

  

  render () {
    const { authorizeError, isAuthorized } = this.props;
    const { state } = this;

    if (isAuthorized) {
      return <Redirect to='/app' />
    }

    return (
      <div className={styles.bg}>
        <div className={styles.form}>
          {fields.map(({ id, label, type }) => (
            <p key={id} className="field">
              <label className="field__label" htmlFor={id}>
                <span className={styles.labelText}>{label}</span>
              </label>
              <input
                id={id}
                className={`${styles.input} t-input-${id}`}
                type={type}
                name={id}
                value={state[id]}
                onChange={this.handleChange}
              />
            </p>
          ))}
          {authorizeError !== '' && (
            <p className={styles.error}>{authorizeError}</p>
          )}
          <div className={styles.buttons}>
            <button onClick={this.handleSubmit} className={styles.button}>
              Войти
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(LoginForm);
