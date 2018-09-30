import React, { Component } from 'react';
import BondImage from './assets/bond_approve.jpg';
import './Form.css';

const formData = {
  firstname: {
    correctValue: 'James',
    label: 'Имя',
    emptyValue: 'Нужно указать имя',
    errorValue: 'Имя указано не верно'
  },
  lastname: {
    correctValue: 'Bond',
    label: 'Фамилия',
    emptyValue: 'Нужно указать фамилию',
    errorValue: 'Фамилия указана не верно'
  },
  password: {
    correctValue: '007',
    label: 'Пароль',
    emptyValue: 'Нужно указать пароль',
    errorValue: 'Пароль указан не верно'
  }
};

const fieldsNameObject = {
  firstname: '',
  lastname: '',
  password: ''
};

class Form extends Component {
  state = {
    values: fieldsNameObject,
    errors: fieldsNameObject,
    isSubmited: false
  };

  changeFormField = event => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      },
      errors: fieldsNameObject
    });
  };

  formKeyPress = event => {
    if (event.key === 'Enter') {
      this.formSubmit(event);
    }
  };

  formSubmit = event => {
    event.preventDefault();
    const errors = {};

    Object.keys(formData).forEach(key => {
      let fieldValue = this.state.values[key],
        fieldData = formData[key];

      if (!fieldValue) {
        errors[key] = fieldData.emptyValue;
      } else {
        let compare =
          key === 'password'
            ? fieldValue !== fieldData.correctValue
            : fieldValue.toLowerCase().trim() !== fieldData.correctValue.toLowerCase().trim();
        if (compare) {
          errors[key] = fieldData.errorValue;
        }
      }
    });

    return this.setState({
      errors: errors,
      isSubmited: Object.keys(errors).length < 1
    });
  };

  render() {
    return (
      <div className="app-container">
        {this.state.isSubmited ? (
          <img src={BondImage} alt="bond approve" className="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.formSubmit}>
            <h1>Введите свои данные, агент</h1>

            {Object.keys(fieldsNameObject).map(fieldName => (
              <p className="field" key={fieldName}>
                <label className="field__label" htmlFor={fieldName}>
                  <span className="field-label">{formData[fieldName].label}</span>
                </label>
                <input
                  className={`field__input field-input t-input-${fieldName}`}
                  type="text"
                  name={fieldName}
                  onChange={this.changeFormField}
                  value={this.state.values[fieldName]}
                />
                <span className={`field__error field-error t-error-${fieldName}`}>{this.state.errors[fieldName]}</span>
              </p>
            ))}
            <div className="form__buttons">
              <input type="submit" className="button t-submit" value="Проверить" onClick={this.formSubmit} />
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Form;
