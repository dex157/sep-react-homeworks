import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import Field from '../Field/Field';
import style from './LoginForm.module.css';

const fields = require('../../config/fields.json');
class LoginForm extends Component {
  state = {
    values: {
      email: '',
      password: ''
    }
  };

  handleChange = event => {
    const { values } = this.state;
    this.setState({
      values: { ...values, [event.target.name]: event.target.value }
    });
  };

  handleSubmit = () => {
    const {
      values: { email, password }
    } = this.state;
    const { authorize } = this.props;

    authorize(email, password);
  };

  render() {
    const { values } = this.state;
    const { authError, isAuthorized } = this.props;

    if (isAuthorized) return <Redirect to="/app"></Redirect>

    return (
      <div className={style.bg}>
        <div className={style.form + ' t-form'}>
          {fields.map((item) => (
            <Field
              key={item.id}
              handleChange={this.handleChange}
              values={values}
              {...item}
            />
          ))}
          {authError && <p className={style.error}>{authError}</p>}
          <div className={style.buttons}>
            <button className={style.button + ' t-login'} onClick={this.handleSubmit}>
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
