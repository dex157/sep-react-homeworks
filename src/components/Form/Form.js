import React, { Component } from 'react';
import './Form.css';
import image from './assets/bond_approve.jpg';

const data = {
  firstname: {
    value: 'james',
    empty: 'Нужно указать имя',
    error: 'Имя указано не верно'
  },
  lastname: {
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
    firstname: '',
    lastname: '',
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
              <label htmlFor="firstname" className="field__label">
                <span className="field-label">Имя</span>
              </label>
              <input
                type="text"
                name="firstname"
                className="field__input field-input t-input-firstname"
                onChange={this.changeHandler}
              />
              <span className="field__error field-error t-error-firstname">
                {errors.firstname}
              </span>
            </p>
            <p className="field">
              <label htmlFor="lastname" className="field__label">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                type="text"
                name="lastname"
                className="field__input field-input t-input-lastname"
                onChange={this.changeHandler}
              />
              <span className="field__error field-error t-error-lastname">
                {errors.lastname}
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
          <img className="t-bond-image" src={image} alt="James Bond" />
        </div>
      );
    }
  }
}

export default Form;
