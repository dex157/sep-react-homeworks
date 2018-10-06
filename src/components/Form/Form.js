import React, { Component } from 'react';
import './Form.css';

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

const errors = [
  {
    name: 'firstname',
    errorEmpty: 'Нужно указать имя',
    errorWrong: 'Имя указано не верно'
  },
  {
    name: 'lastname',
    errorEmpty: 'Нужно указать фамилию',
    errorWrong: 'Фамилия указана не верно'
  },
  {
    name: 'password',
    errorEmpty: 'Нужно указать пароль',
    errorWrong: 'Пароль указан не верно'
  }
];

class Form extends Component {
  state = {
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    },
    values: {
      firstname: '',
      lastname: '',
      password: ''
    }
  };

  renderFields = () => {
    const { values, errors } = this.state;
    return fields.map(field => (
      <p key={field.name} className="field">
        <label htmlFor={field.name} className="field__label">
          <span className="field-label">{field.label}</span>
        </label>
        <input
          type="text"
          className={`field__input field-input t-input-${field.name}`}
          name={field.name}
          value={values[field.name]}
          onChange={this.handleChange}
        />
        <span className={`field__error field-error t-error-${field.name}`}>
          {errors[field.name]}
        </span>
      </p>
    ));
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target.nodeName);
  };

  render() {
    return (
      <div className="app-container">
        <form action="" className="form">
          <h1>Введите свои данные, агент</h1>
          {this.renderFields()}
          <div className="form__buttons">
            <input
              type="submit"
              value="Проверить"
              className="button t-submit"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
