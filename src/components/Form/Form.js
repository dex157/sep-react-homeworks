import React, { Component } from 'react';
import './Form.css';
import image from './assets/bond_approve.jpg';

const formFields = [
  {
    label: 'Имя',
    name: 'firstname',
    type: 'text'
  },
  {
    label: 'Фамилия',
    name: 'lastname',
    type: 'text'
  },
  {
    label: 'Пароль',
    name: 'password',
    type: 'password'
  }
];

const defaultErrors = {
  firstname: '',
  lastname: '',
  password: ''
};

export default class Form extends Component {
  state = {
    form: {
      firstname: '',
      lastname: '',
      password: ''
    },
    errors: defaultErrors,
    valid: false
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(state => ({
      form: { ...state.form, ...{ [name]: value } },
      errors: defaultErrors
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { form } = this.state;

    this.validate(form);
  };

  validate({ firstname, lastname, password }) {
    let errors = {};

    (!firstname && (errors.firstname = 'Нужно указать имя')) ||
      (firstname.toLowerCase() !== 'james' &&
        (errors.firstname = 'Имя указано не верно'));
    (!lastname && (errors.lastname = 'Нужно указать фамилию')) ||
      (lastname.toLowerCase() !== 'bond' &&
        (errors.lastname = 'Фамилия указана не верно'));
    (!password && (errors.password = 'Нужно указать пароль')) ||
      (password !== '007' && (errors.password = 'Пароль указан не верно'));

    this.setState(state => ({
      errors: { ...state.errors, ...errors },
      valid: !Object.keys(errors).length
    }));
  }

  renderForm = () => {
    const { form, errors } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Введите свои данные, агент</h1>
        {formFields.map(field => (
          <p className="field" key={field.name}>
            <label className="field__label" htmlFor={field.name}>
              <span className="field-label">{field.label}</span>
            </label>
            <input
              className={`field__input field-input t-input-${field.name}`}
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={this.handleChange}
            />
            <span className={`field__error field-error t-error-${field.name}`}>
              {errors[field.name]}
            </span>
          </p>
        ))}
        <div className="form__buttons">
          <input type="submit" className="button t-submit" value="Проверить" />
        </div>
      </form>
    );
  };

  render() {
    const { valid } = this.state;

    return (
      <div className="app-container">
        {valid ? (
          <img src={image} alt="bond approve" className="t-bond-image" />
        ) : (
          this.renderForm()
        )}
      </div>
    );
  }
}
