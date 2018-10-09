import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import style from './LoginForm.module.css';

const inputs = [
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

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onClick = () => {
    const {email, password} = this.state;
    const {authorize} = this.props;
    authorize(email, password);
  };

  onChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  renderForm = input => {
    const state = this.state;

    return (
      <p key = {input.id}>
        <label htmlFor = {input.id}>
            <span className = {style.labelText}>{input.label}</span>
        </label>
        <input
            className = {style.input + ` t-input-${input.id}`}
            type = {input.type}
            name = {input.id}
            value = {state[input.id]}
            onChange = {this.onChange}
        />
      </p>
    );
  };

  render() {
    const {isAuthorized, authError} = this.props;

    return(
        isAuthorized
            ? <Redirect to="/app" />
            : (
                <div className = {style.bg}>
                    <div className = {style.form + ' t-form'}>
                        {inputs.map(this.renderForm)}
                        {authError && <p className = {style.error}>{authError}</p>}
                        <div className = {style.buttons}>
                            <button
                            onClick = {this.onClick}
                            className = {style.button + ' t-login'}
                            >
                            Войти
                            </button>
                        </div>
                    </div>
                </div>
            )
    )
  }
}

export default withAuth(LoginForm);