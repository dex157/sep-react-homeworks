import React from 'react';
import './Form.css';
import isLoginPic from './assets/bond_approve.jpg';

class Form extends React.Component {
  state = {
    inputs: {
      firstname: {
        inputValue: '',
        inputName: 'Имя'
      },
      lastname: {
        inputValue: '',
        inputName: 'Фамилия'
      },
      password: {
        inputValue: '',
        inputName: 'Пароль'
      }
    },
    admin: {
      firstname: 'james',
      lastname: 'bond',
      password: '007'
    },
    firstnameIsValid: false,
    lastnameIsValid: false,
    passwordIsValid: false,

    firstnameError: '',
    lastnameError: '',
    passwordError: '',

    isLogIn: false
  };

  handleOnSubmit = e => {
    if (e && e.type === 'submit') {
      e.preventDefault();
    }
    const {
      admin,
      inputs,
      firstnameIsValid,
      lastnameIsValid,
      passwordIsValid
    } = this.state;

    for (let field in inputs) {
      if (inputs[field].inputValue) {
        if (inputs[field].inputValue.toLowerCase() === admin[field]) {
          this.setState({
            [`${field}Error`]: ``,
            [`${field}IsValid`]: true
          });
        } else {
          this.setState({
            [`${field}Error`]: `${inputs[field].inputName} указано не верно`,
            [`${field}IsValid`]: false
          });
        }
      } else {
        this.setState({
          [`${field}Error`]: `Нужно указать ${inputs[
            field
          ].inputName.toLowerCase()} `,
          [`${field}IsValid`]: false
        });
      }
    }

    if (firstnameIsValid && lastnameIsValid && passwordIsValid) {
      this.setState({
        isLogIn: true
      });
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleOnSubmit();
    }
  };
  handleOnChange = e => {
    this.setState({
      firstnameError: '',
      lastnameError: '',
      passwordError: '',
      inputs: {
        ...this.state.inputs,
        [e.target.name]: {
          ...this.state.inputs[e.target.name],
          inputValue: e.target.value
        }
      }
    });
  };

  render() {
    const { isLogIn, inputs } = this.state;
    return (
      <div className="app-container">
        {isLogIn ? (
          <img src={isLoginPic} alt="bond approve" className="t-bond-image" />
        ) : (
          <form
            className="form"
            onSubmit={this.handleOnSubmit}
            onKeyPress={this.handleKeyPress}
          >
            <h1>Введите свои данные, агент</h1>

            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                className="field__input t-input-firstname"
                type="text"
                name="firstname"
                value={inputs.firstname.inputValue}
                onChange={this.handleOnChange}
              />

              <span className="field__error field-error t-error-firstname">
                {this.state.firstnameError}
              </span>
            </p>

            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                className="field__input t-input-lastname"
                type="text"
                name="lastname"
                value={inputs.lastname.inputValue}
                onChange={this.handleOnChange}
              />
              <span className="field__error field-error t-error-lastname">
                {this.state.lastnameError}
              </span>
            </p>

            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input
                className="field__input t-input-password"
                type="password"
                name="password"
                value={inputs.password.inputValue}
                onChange={this.handleOnChange}
              />
              <span className="field__error field-error t-error-password">
                {this.state.passwordError}
              </span>
            </p>

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
