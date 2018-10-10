import React, { Component } from 'react';
import ImageBond from './assets/bond_approve.jpg';

const validParams = {
  firstname: 'james',
  lastname: 'bond',
  password: '007'
};
const fields = [
    {
      name: 'firstname',
      label: 'Имя',
      type: 'text'
    },
    {
      name: 'lastname',
      label: 'Фамилия',
      type: 'text'
    },
    {
      name: 'password',
      label: 'Пароль',
      type: 'password'
    }
  ];
  const errorsText = {
    firstname: {
      errorEmpty: 'Нужно указать имя',
      errorInvalid: 'Имя указано не верно',
    },
    lastname: {
      errorEmpty: 'Нужно указать фамилию',
      errorInvalid: 'Фамилия указана не верно',
    },
    password: {
      errorEmpty: 'Нужно указать пароль',
      errorInvalid: 'Пароль указан не верно',
    }
  };
class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    }
  };

  // Валидатор возвращает пустой текст или текст ошибки
  validation(fieldName) {
    const elementError = {};
    if (this.state[fieldName]) {
      if (this.state[fieldName] === validParams[fieldName]) {
        return false; 
      } else {
        elementError.errorValid = true
      }
    } else {
      elementError.errorEmpty = true
    }
    return elementError;
  }

  inputChange = event => {
    this.setState({
      errors: {
        firstname: '',
        lastname: '',
        password: ''
      },
      [event.target.name]: event.target.value
    });
  };
  errorTextExtends(errors){
    const errorsTextState = {}
    for (const items in errors) {
      if(errors[items].errorEmpty){
        errorsTextState[items] = errorsText[items].errorEmpty
        }
      if(errors[items].errorValid){
        errorsTextState[items] = errorsText[items].errorInvalid
        }
    }
    return errorsTextState;
  }
  validSubmit = event => {
    event.preventDefault();
    let errors = {};
    for (const item of fields) {
      if (this.validation(item.name))
        errors[item.name] = this.validation(item.name);
    }
    let result = this.errorTextExtends(errors);
    if(Object.keys(result).length === 0){
      this.setState({
        formValid: true
      })
    } else {
      this.setState({
        errors: {...result}
      })
    }
  };

  render() {
    const { formValid } = this.state;
    // Return у метода рендер может быть таким для этого ДЗ
    return (
      <div className="app-container">
        {formValid ? (
          <Approve />
        ) : (
          <form className="form">
            <h1> Введите свои данные, агент </h1> {/* Импуты ввода данных */}
            {fields.map(fieldName => (
              <p className="field" key={fieldName.name}>
                <label className="field__label" htmlFor={fieldName.name}>
                  <span className="field-label"> {fieldName.label} </span>
                </label>
                <input
                  className={`field__input field-input t-input-${
                    fieldName.name
                  }`}
                  type={fieldName.type}
                  name={fieldName.name}
                  onChange={this.inputChange}
                  value={this.state[fieldName.name]}
                />
                <span
                  className={`field__error field-error t-error-${
                    fieldName.name
                  }`}
                >
                  {this.state.errors[fieldName.name]}
                </span>
              </p>
            ))}
            <div className="form__buttons">
              <input
                onClick={this.validSubmit}
                className="button t-submit"
                type="submit"
                value="Проверить"
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}

class Approve extends Component {
  render() {
    return (
      <img scr={ImageBond} alt="Картинка James Bond" className="t-bond-image" />
    );
  }
}

export default Form;