import React, { Component } from 'react';
import './Form.css';
import image from './assets/bond_approve.jpg';

const fields = [
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

const validData = {
  firstname: 'james',
  lastname: 'bond',
  password: '007'
};

class Form extends Component {
  state = {
    form: {
      firstname: '',
      lastname: '',
      password: ''
    },
    errors: defaultErrors,
    isValid: false
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(state => ({
      form: { ...state.form, ...{ [name]: value } },
      errors: defaultErrors
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.state;

    this.validate(form);
  };

  validate({ firstname, lastname, password }) {
    let errors = {};

    (!firstname && (errors.firstname = 'Нужно указать имя')) ||
      (firstname.toLowerCase() !== validData.firstname &&
        (errors.firstname = 'Имя указано не верно'));
    (!lastname && (errors.lastname = 'Нужно указать фамилию')) ||
      (lastname.toLowerCase() !== validData.lastname &&
        (errors.lastname = 'Фамилия указана не верно'));
    (!password && (errors.password = 'Нужно указать пароль')) ||
      (password !== validData.password &&
        (errors.password = 'Пароль указан не верно'));

    this.setState(state => ({
      errors: { ...state.errors, ...errors },
      isValid: !Object.keys(errors).length
    }));
  };

  render() {
    const { form, errors, isValid } = this.state;

    return (
      <div className="app-container">
        {isValid ? (
          <img scr={image} alt="Картинка James Bond" className="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.handleSubmit}>
            <h1>Введите свои данные, агент</h1>
            {fields.map(field => (
              <p className="field" key={field.name}>
                <label className="field_label" htmlFor={field.name}>
                  <span className="field-label">{field.label}</span>
                </label>
                <input
                  className={`field__input field-input t-input-${field.name}`}
                  type={field.type}
                  name={field.name}
                  onChange={this.handleChange} 
                  value={form[field.name]}
                />
                <span
                  className={`field__error field-error t-error-${field.name}`}
                >
                  {errors[field.name]}
                </span>
              </p>
            ))}
            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
                onClick={this.validate}                
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Form;
