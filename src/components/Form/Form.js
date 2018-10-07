import React, { Component } from 'react';
import './Form.css';

import Field from '../Field/Field';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { firstname: '', lastname: '', password: '' },
      error: { firstname: '', lastname: '', password: '' },
      isOk: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const { value } = this.state;

    this.setState(state => ({
      value: { ...state.value },
      error: { ...state.error },
      isOk: true
    }));
    if (value.firstname.toUpperCase() !== 'JAMES') {
      this.setState(state => ({
        value: { ...state.value },
        error: { ...state.error, firstname: 'Имя указано не верно' },
        isOk: false
      }));
    }
    if (!value.firstname) {
      this.setState(state => ({
        value: { ...state.value },
        error: { ...state.error, firstname: 'Нужно указать имя' },
        isOk: false
      }));
    }
    if (value.lastname.toUpperCase() !== 'BOND') {
      this.setState(state => ({
        value: { ...state.value },
        error: { ...state.error, lastname: 'Фамилия указана не верно' },
        isOk: false
      }));
    }
    if (!value.lastname) {
      this.setState(state => ({
        value: { ...state.value },
        error: { ...state.error, lastname: 'Нужно указать фамилию' },
        isOk: false
      }));
    }
    if (value.password !== '007') {
      this.setState(state => ({
        value: { ...state.value },
        error: { ...state.error, password: 'Пароль указан не верно' },
        isOk: false
      }));
    }
    if (!value.password) {
      this.setState(state => ({
        value: { ...state.value },
        error: { ...state.error, password: 'Нужно указать пароль' },
        isOk: false
      }));
    }
  }

  handleFieldChange(e) {
    const { name, value } = e.target;
    this.setState(state => ({
      value: { ...state.value, [name]: value },
      error: { firstname: '', lastname: '', password: '' }
    }));
  }

  render() {
    let element;

    if (this.state.isOk) {
      element = (
        <img
          src='/bond_approve.9943a33d.jpg'
          alt="bond approve"
          className="t-bond-image"
        />
      );
    } else {
      element = (
        <form className="form">
          <h1>Введите свои данные, агент</h1>
          <Field
            title="Имя"
            name="firstname"
            value={this.state.value.firstname}
            error={this.state.error.firstname}
            onFieldChange={this.handleFieldChange}
          />
          <Field
            title="Фамилия"
            name="lastname"
            value={this.state.value.lastname}
            error={this.state.error.lastname}
            onFieldChange={this.handleFieldChange}
          />
          <Field
            title="Пароль"
            name="password"
            value={this.state.value.password}
            error={this.state.error.password}
            onFieldChange={this.handleFieldChange}
          />
          <div className="form__buttons">
            <input
              className="button t-submit"
              value="Проверить"
              type="submit"
              onClick={this.handleClick}
            />
          </div>
        </form>
      );
    }
    return element;
  }
}

export default Form;
