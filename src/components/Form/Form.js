import React, { Component } from 'react';
import Img from './assets/bond_approve.jpg';

import './Form.css';

export default class Form extends Component {
  state = {
    values: {
      firstname: '',
      lastname: '',
      password: ''
    },

    errors: {
      firstname: '',
      lastname: '',
      password: ''
    },

    isValid: false
  };

  handleChange = e => {
    const { values } = this.state;
    const { name, value } = e.target;

    this.setState({
      values: {
        ...values,
        [name]: value
      },
      errors: {
        firstname: '',
        lastname: '',
        password: ''
      }
    });
  };

  validateName = value => {
    if (value === '') {
      this.setState(({ errors }) => ({
        errors: { ...errors, firstname: 'Нужно указать имя' }
      }));
      return false;
    }
    if (value.toLowerCase() !== 'james') {
      this.setState(({ errors }) => ({
        errors: { ...errors, firstname: 'Имя указано не верно' }
      }));
      return false;
    }

    return true;
  };

  validateLastName = value => {
    if (value === '') {
      this.setState(({ errors }) => ({
        errors: { ...errors, lastname: 'Нужно указать фамилию' }
      }));
      return false;
    }
    if (value.toLowerCase() !== 'bond') {
      this.setState(({ errors }) => ({
        errors: { ...errors, lastname: 'Фамилия указана не верно' }
      }));
      return false;
    }

    return true;
  };

  validatePassword = value => {
    if (value === '') {
      this.setState(({ errors }) => ({
        errors: { ...errors, password: 'Нужно указать пароль' }
      }));
      return false;
    }
    if (value.toLowerCase() !== '007') {
      this.setState(({ errors }) => ({
        errors: { ...errors, password: 'Пароль указан не верно' }
      }));
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstname, lastname, password } = this.state.values;
    const validName = this.validateName(firstname);
    const validLastName = this.validateLastName(lastname);
    const validPassword = this.validatePassword(password);

    if (validName && validLastName && validPassword) {
      return this.setState({ isValid: true });
    }

    return this.setState({ isValid: false });
  };

  render() {
    const { firstname, lastname, password } = this.state.values;
    const { errors } = this.state;
    const aprove = <img src={Img} alt="bond approve" class="t-bond-image" />;
    const form = (
      <form className="form">
        <h1>Введите свои данные, агент</h1>
        <p className="field">
          <label className="field__label" htmlFor="firstname">
            <span className="field-label">Имя</span>
          </label>
          <input
            className="field__input field-input t-input-firstname"
            type="text"
            name="firstname"
            value={firstname}
            onChange={this.handleChange}
          />
          <span className="field__error field-error t-error-firstname">
            {errors.firstname}
          </span>
        </p>
        <p className="field">
          <label className="field__label" htmlFor="lastname">
            <span className="field-label">Фамилия</span>
          </label>
          <input
            className="field__input field-input t-input-lastname"
            type="text"
            name="lastname"
            value={lastname}
            onChange={this.handleChange}
          />
          <span className="field__error field-error t-error-lastname">
            {errors.lastname}
          </span>
        </p>
        <p className="field">
          <label className="field__label" htmlFor="password">
            <span className="field-label">Пароль</span>
          </label>
          <input
            className="field__input field-input t-input-password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <span className="field__error field-error t-error-password">
            {errors.password}
          </span>
        </p>
        <div className="form__buttons">
          <input
            type="submit"
            className="button t-submit"
            value="Проверить"
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    );

    if (this.state.isValid) {
      return <div className="app-container">{aprove}</div>;
    } else {
      return <div className="app-container">{form}</div>;
    }
  }
}
