import React, { Component } from 'react';
import './Form.css';
import image from './assets/bond_approve.jpg';

const objFieldsProps = {
  firstname: {
    validValue: 'James',
    label: 'Имя',
    warningMsg: 'Нужно указать имя',
    errorMsg: 'Имя указано не верно',
    inputType: 'text'
  },
  lastname: {
    validValue: 'Bond',
    label: 'Фамилия',
    warningMsg: 'Нужно указать фамилию',
    errorMsg: 'Фамилия указана не верно',
    inputType: 'text'
  },
  password: {
    validValue: '007',
    label: 'Пароль',
    warningMsg: 'Нужно указать пароль',
    errorMsg: 'Пароль указан не верно',
    inputType: 'password'
  }
};

const objFields = {
  firstname: '',
  lastname: '',
  password: ''
};


class Form extends Component {
  state = {
    values: objFields,
    errors: objFields,
    isValid: false
  };

  changeHandler = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      },
      errors: objFields
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const objErrors = {};

    Object.keys(objFieldsProps).forEach((key) => {
      const fieldValue = this.state.values[key];
      const fieldProps = objFieldsProps[key];

      if (!fieldValue) {
        objErrors[key] = fieldProps.warningMsg;
      } else {
        const isEqual =
          (key === 'password')
            ? fieldValue === fieldProps.validValue
            : fieldValue.toLowerCase().trim() === fieldProps.validValue.toLowerCase().trim();
        if (!isEqual) {
          objErrors[key] = fieldProps.errorMsg;
        }
      }
    });

    this.setState({
      errors: objErrors,
      isValid: Object.keys(objErrors).length === 0
    });
  };

  render() {
    return (
      <div className="app-container">
        {this.state.isValid ? (
          <img src={image} alt="bond approve" className="t-bond-image" />
          ) : (
          <form className="form" onSubmit={this.formSubmit}>
            <h1>Введите свои данные, агент</h1>

            {Object.keys(objFields).map(fldName => (
              <p className="field" key={fldName}>
                <label className="field__label" htmlFor={fldName}>
                  <span className="field-label">{objFieldsProps[fldName].label}</span>
                </label>
                <input
                  className={`field__input field-input t-input-${fldName}`}
                  type={objFieldsProps[fldName].inputType}
                  name={fldName}
                  onChange={this.changeHandler}
                  value={this.state.values[fldName]}
                />
                <span className={`field__error field-error t-error-${fldName}`}>{this.state.errors[fldName]}</span>
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