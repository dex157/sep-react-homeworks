import React, { Component } from 'react';
import './Form.css';
import imageSuccess from './assets/bond_approve.jpg';

const data = {
  firstName: {
    value: 'james',
    empty: 'Нужно указать имя',
    error: 'Имя указано не верно'
  },
  lastName: {
    value: 'bond',
    empty: 'Нужно указать фамилию',
    error: 'Фамилия указана не верно'
  },
  password: {
    value: '007',
    empty: 'Нужно указать пароль',
    error: 'Пароль указан не верно'
  }
};

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    errors: {},
    isValid: false
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {}
    });
  };

  dataValidate = e => {
    e.preventDefault();
    const errors = {};
    for (let key in data) {
      if (this.state[key] === '') {
        errors[key] = data[key].empty;
      } else if (this.state[key].toLowerCase() !== data[key].value) {
        errors[key] = data[key].error;
      }
    }
    this.setState({ errors, isValid: Object.keys(errors).length === 0 });
  };

  render() {
    const { errors, isValid } = this.state;
    if (!isValid) {
      return (
        <div className="app-container">
          <form className="form">
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label htmlFor="firstName" className="field__label">
                <span className="field-label">Имя</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="field__input field-input t-input-firstName"
                onChange={this.changeHandler}
              />
              <span className="field__error field-error t-error-firstName">
                {errors.firstName}
              </span>
            </p>
            <p className="field">
              <label htmlFor="lastName" className="field__label">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="field__input field-input t-input-lastName"
                onChange={this.changeHandler}
              />
              <span className="field__error field-error t-error-lastName">
                {errors.lastName}
              </span>
            </p>
            <p className="field">
              <label htmlFor="password" className="field__label">
                <span className="field-label">Пароль</span>
              </label>
              <input
                type="text"
                name="password"
                className="field__input field-input t-input-password"
                onChange={this.changeHandler}
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
                onClick={this.dataValidate}
              />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <img className="t-bond-image" src={imageSuccess} alt="James Bond" />
        </div>
      );
    }
  }
}

export default Form;
