import React from 'react';
import './Form.css';
import isLoginPic from './assets/bond_approve.jpg';

const inputs = [
  {
    fieldName: 'Имя',
    inputName: 'firstname'
  },
  {
    fieldName: 'Фамилия',
    inputName: 'lastname'
  },
  {
    fieldName: 'Пароль',
    inputName: 'password'
  }
];

class Form extends React.Component {
  state = {
    values: {
      firstname: '',
      lastname: '',
      password: ''
    },
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    },
    isLoggin: false
  };

  handelSubmit = e => {
    if (e && e.type === 'submit') {
      e.preventDefault();
    }

    const { values } = this.state;
    const errorsEmptyMessage = {};
    const errorsWrongMessage = {};

    if (!values.firstname) errorsEmptyMessage.firstname = 'Нужно указать имя';
    if (!values.lastname) errorsEmptyMessage.lastname = 'Нужно указать фамилию';
    if (!values.password) errorsEmptyMessage.password = 'Нужно указать пароль';

    const isLoggin =
      values.firstname.toLowerCase() === 'james' &&
      values.lastname.toLowerCase() === 'bond' &&
      values.password === '007';

    if (!isLoggin) {
      if (values.firstname.toLowerCase() !== 'james')
        errorsWrongMessage.firstname = 'Имя указано не верно';
      if (values.lastname.toLowerCase() !== 'bond')
        errorsWrongMessage.lastname = 'Фамилия указана не верно';
      if (values.password !== '007')
        errorsWrongMessage.password = 'Пароль указан не верно';
    }

    this.setState(state => ({
      errors: { ...state.errors, ...errorsWrongMessage, ...errorsEmptyMessage },
      isLoggin
    }));
  };

  handleOnChange = e => {
    let { value, name } = e.target;
    let { values } = this.state;
    this.setState({
      values: { ...values, [name]: value },
      errors: {
        firstname: '',
        lastname: '',
        password: ''
      }
    });
  };

  render() {
    const { isLoggin, values, errors } = this.state;

    return (
      <div className="app-container">
        {isLoggin ? (
          <img src={isLoginPic} alt="bond approve" class="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.handelSubmit}>
            <h1>Введите свои данные, агент</h1>
            {inputs.map(({ inputName, fieldName }) => (
              <p className="field" key={inputName}>
                <label className="field__label" htmlFor={inputName}>
                  <span className="field-label">{fieldName}</span>
                </label>
                <input
                  className={`field__input t-input-${inputName}`}
                  type="text"
                  name={inputName}
                  value={values[inputName]}
                  onChange={this.handleOnChange}
                />
                <span className={`field__error field-error t-error-${inputName}`}>
                  {errors[inputName]}
                </span>
                
              </p>
            ))}
            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Form;
