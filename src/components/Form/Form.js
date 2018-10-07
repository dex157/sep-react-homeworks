import React, { Component } from 'react';
import './Form.css';
import jamesBondImg from './assets/bond_approve.jpg';

const validData = {
  firstname: 'James',
  lastname: 'Bond',
  password: '007'
};

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

const errorsTypes = {
  firstname: {
    errorEmpty: 'Нужно указать имя',
    errorWrong: 'Имя указано не верно'
  },
  lastname: {
    errorEmpty: 'Нужно указать фамилию',
    errorWrong: 'Фамилия указана не верно'
  },
  password: {
    errorEmpty: 'Нужно указать пароль',
    errorWrong: 'Пароль указан не верно'
  }
};

class Form extends Component {
  state = {
    errors: {},
    values: {
      firstname: '',
      lastname: '',
      password: ''
    },
    isValid: false
  };

  renderFields = () => {
    const { values, errors } = this.state;
    return fields.map(field => (
      <p key={field.name} className="field">
        <label htmlFor={field.name} className="field__label">
          <span className="field-label">{field.label}</span>
        </label>
        <input
          className={`field__input field-input t-input-${field.name}`}
          name={field.name}
          type={field.name}
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
      },
      errors: {
        ...this.state.errors,
        [name]: ''
      }
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { values } = this.state;
    this.checkValidity(values);
  };

  checkValidity = values => {
    const errors = {};
    for (let value in values) {
      if (values[value] === '') {
        errors[value] = errorsTypes[value].errorEmpty;
      } else if (
        values[value].toLowerCase() !== validData[value].toLowerCase()
      ) {
        errors[value] = errorsTypes[value].errorWrong;
      }
      this.setState({ errors, isValid: !Object.keys(errors).length });
    }
  };

  render() {
    const { isValid } = this.state;
    if (!isValid) {
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
    } else {
      return (
        <div className="app-container">
          <img className="t-bond-image" src={jamesBondImg} alt="" />
        </div>
      );
    }
  }
}

export default Form;
