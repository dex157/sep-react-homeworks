import React, {Component} from 'react';
import './Form.css';
import Pic from './assets/bond_approve.jpg';

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

const correctLogin = {
  firstname: 'james',
  lastname: 'bond',
  password: '007'
};

const inputsInitial = {
  firstname: '',
  lastname: '',
  password: ''
};

const errorsInitial = {
  firstname: '',
  lastname: '',
  password: ''
};

export default class Form extends Component {
  state = {
    ...inputsInitial,
    errors: errorsInitial,
    isValid: false
  };

  checkField = (value, fieldName) => {
    if (value) {
      return value.toLowerCase() !== correctLogin[fieldName] ? errorsText[fieldName].errorInvalid : '';
    } else {
      return errorsText[fieldName].errorEmpty;
    }
  };

  isFormValid = errors => !errors.firstname && !errors.lastname && !errors.password;

  validate = () => {
    const errors = {};

    errors.firstname = this.checkField(this.state.firstname, 'firstname');
    errors.lastname = this.checkField(this.state.lastname, 'lastname');
    errors.password = this.checkField(this.state.password, 'password');

    this.setState({
      errors,
      isValid: this.isFormValid(errors)
    });
  };

  onInputChange = evt => {
    const {name, value} = evt.target;

    this.setState({
      errors: errorsInitial,
      [name]: value
    });
  };

  onFormSubmit = evt => {
    evt.preventDefault();

    this.validate();
  };

  render() {
    return(
      <div className="app-container"> {
        this.state.isValid ? (
          <img 
            className="t-bond-image"
            src={Pic} 
            alt="bond_approve" 
          />               
        ) : (
        <form className="form">
          <h1>Введите свои данные, агент</h1>

          {fields.map(field => (
            <p className = "field" key={field.name}>
              <label className = "field__label" htmlFor={field.name}>
                <span className = "field-label">{field.label}</span>
              </label>
              <input 
                className={`field__input field-input t-input-${field.name}`}
                type={field.type}
                name={field.name}
                value={this.state[field.name]}
                onChange={this.onInputChange} 
              />
              <span className={`field__error field-error t-error-${field.name}`}>
                {this.state.errors[field.name]}
              </span>
            </p>
          ))}

          <div className = "form__buttons">
            <input
              className = "button t-submit"
              type = "submit"
              value = "Проверить"
              onClick = {this.onFormSubmit} 
            />
          </div>
        </form>
        ) 
      } </div>
    )
  };
};