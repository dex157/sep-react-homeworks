import React, { Component } from 'react';
import Bond from './assets/bond_approve.jpg';
import './Form.css';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    errors: {
      firstName: '',
      lastName: '',
      password: ''
    },
    isValid: false
  };

  // recive image
  renderImage = () => {
    return <img src={Bond} alt="bond approve" class="t-bond-image" />;
  };

  // clear errors
  clearError = () => {
    let errors = { ...this.state.errors };

    for (let key in errors) {
      errors[key] = '';
    }

    return errors;
  };

  // listen changes
  handleChange = (field, event) => {
    this.setState({ [field]: event.target.value, errors: this.clearError() });
  };

  // submit
  handleSubmit = event => {
    event.preventDefault();
    this.formValidate();
  };

  // form validate
  formValidate = () => {
    let errors = this.state.errors;

    errors.firstName = this.FirstNameCheck();
    errors.lastName = this.LastNameCheck();
    errors.password = this.PasswordCheck();

    this.setState({ errors, isValid: this.isValid(errors) });
  };

  // valid key
  isValid = errors => !errors.firstName && !errors.lastName && !errors.password;

  // firstname field validate
  FirstNameCheck = () => {
    const { firstName } = this.state;

    if (firstName) {
      return firstName.toUpperCase() !== 'JAMES' ? 'Имя указано не верно' : '';
    } else {
      return 'Нужно указать имя';
    }
  };

  // lastname field validate
  LastNameCheck = () => {
    const { lastName } = this.state;

    if (lastName) {
      return lastName.toUpperCase() !== 'BOND'
        ? 'Фамилия указана не верно'
        : '';
    } else {
      return 'Нужно указать фамилию';
    }
  };

  // password field validate
  PasswordCheck = () => {
    const { password } = this.state;

    if (password) {
      return password !== '007' ? 'Пароль указан не верно' : '';
    } else {
      return 'Нужно указать пароль';
    }
  };

  // render form
  renderForm = () => {
    const { firstName, lastName, password, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Введите свои данные, агент</h1>

        <p className={'field'}>
          <label className={'field__label'} for="firstname">
            <span className={'field-label'}>Имя</span>
          </label>
          <input
            name="firstname"
            type="text"
            className={'field__input field-input t-input-firstname'}
            value={firstName}
            onChange={e => this.handleChange('firstName', e)}
          />
          <span className={'field__error field-error t-error-firstname'}>
            {errors.firstName}
          </span>
        </p>

        <p className={'field'}>
          <label className={'field__label'} for="lastname">
            <span className={'field-label'}>Фамилия</span>
          </label>
          <input
            name="lastname"
            type="text"
            className={'field__input field-input t-input-lastname'}
            value={lastName}
            onChange={e => this.handleChange('lastName', e)}
          />
          <span className={'field__error field-error t-error-lastname'}>
            {errors.lastName}
          </span>
        </p>

        <p className={'field'}>
          <label className={'field__label'} for="password">
            <span className={'field-label'}>Пароль</span>
          </label>
          <input
            name="password"
            type="password"
            className={'field__input field-input t-input-password'}
            value={password}
            onChange={e => this.handleChange('password', e)}
          />
          <span className={'field__error field-error t-error-password'}>
            {errors.password}
          </span>
        </p>

        <div className={'form__buttons'}>
          <button className={'button t-submit'}>Проверить</button>
        </div>
      </form>
    );
  };

  render() {
    const { isValid } = this.state;

    return (
      <div className={'app-container'}>
        {!isValid ? this.renderForm() : this.renderImage()}
      </div>
    );
  }
}

export default Form;
