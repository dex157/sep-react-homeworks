import React, { Component } from 'react'
import './Form.css'
import BondPhoto from './assets/bond_approve.jpg'

const credentials = {
  firstname: 'james',
  lastname: 'bond',
  password: '007',
};

const authForm = [
  {
    label: 'Имя',
    type: 'text',
    name: 'firstname',
    errorEmpty: 'Нужно указать имя',
    errorValid: 'Имя указано не верно',
  },
  {
    label: 'Фамилия',
    type: 'text',
    name: 'lastname',
    errorEmpty: 'Нужно указать фамилию',
    errorValid: 'Фамилия указана не верно',
  },
  {
    label: 'Пароль',
    type: 'password',
    name: 'password',
    errorEmpty: 'Нужно указать пароль',
    errorValid: 'Пароль указан не верно',
  },
];

class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    },
    isValid: false,
  };

  validateField(fieldName) {
    const fieldsItem = authForm.find(el => el.name === fieldName);
    const value = this.state[fieldName];

    if(value) {
      if (credentials[fieldName] === value.toLowerCase()){
        return false;
      } else {
        return fieldsItem.errorValid
      }
    } else {
      return fieldsItem.errorEmpty
    }
  }

  handleSubmit  = event => {
    let errors = {};
    event.preventDefault();

    for (const item of authForm) {
      if (this.validateField(item.name))
        errors[item.name] = this.validateField(item.name)
    }

    if (Object.keys(errors).length !== 0) {
      this.setState(state => ({
        errors: { ...state.errors, ...errors }
      }))
    } else {
      this.setState({ isValid: true })
    }
  };

  handleChange = event => {
    this.setState({
      errors: {
        firstname: '',
        lastname: '',
        password: '',
      },
      [event.target.name]: event.target.value,
    })
  };

  render(){
    const { isValid } = this.state;
    return (
      <div className="app-container">
        {isValid ? (
          <img src={BondPhoto} className="t-bond-image" alt="bond approve"/>
        ) : (
          <form className="form">
            <h1>Введите свои данные, агент</h1>
            {authForm.map(fieldName => (
              <p className="field" key={fieldName.name}>
                <label className="field__label" htmlFor={fieldName.name}>
                  <span className="field-label">{fieldName.label}</span>
                </label>
                <input
                  className={`field__input field-input t-input-${fieldName.name}`}
                  type={fieldName.type}
                  name={fieldName.name}
                  onChange={this.handleChange}
                  value={this.state[fieldName.name]}
                />
                <span className={`field__error field-error t-error-${fieldName.name}`}>
                                    {this.state.errors[fieldName.name]}
                                </span>
              </p>
            ))}
            <div className="form__buttons">
              <input onClick={ this.handleSubmit } className="button t-submit" type="submit" value="Проверить"/>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default Form