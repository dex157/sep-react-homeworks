import React, { Component } from 'react'
import './Form.css'
import BondImg from './assets/bond_approve.jpg';

class Form extends Component {
  state = {
    firstnameValue: '',
    lastnameValue: '',
    passwordValue: '',
    validFirstnameValue: 'james',
    validLastnameValue: 'bond',
    validPasswordValue: '007',
    firstnameValidateMsg: '',
    lastnameValidateMsg: '',
    passwordValidateMsg: '',
    isSucsess: false
  }

  droppValidateMessages = () => {
    this.setState({
      firstnameValidateMsg: '',
      lastnameValidateMsg: '',
      passwordValidateMsg: ''
    })
  }

  handleFirstnameChange = (e) => {
    this.droppValidateMessages()
    this.setState({
      firstnameValue: e.target.value
    })
  }

  handleLastnameChange = (e) => {
    this.droppValidateMessages()
    this.setState({
      lastnameValue: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.droppValidateMessages()
    this.setState({
      passwordValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const {
      firstnameValue,
      lastnameValue,
      passwordValue,
      validFirstnameValue,
      validLastnameValue,
      validPasswordValue
    } = this.state

    if (
      firstnameValue.toLowerCase() === validFirstnameValue
      && lastnameValue.toLowerCase() === validLastnameValue
      && passwordValue === validPasswordValue
    ) {
      this.setState({
        isSucsess: true
      })
    }

    if (!firstnameValue) {
      this.setState({
        firstnameValidateMsg: "Нужно указать имя"
      })
    } else {
      if (firstnameValue.toLowerCase() !== validFirstnameValue) {
        this.setState({
          firstnameValidateMsg: "Имя указано не верно"
        })
      }
    }

    if (!lastnameValue) {
      this.setState({
        lastnameValidateMsg: "Нужно указать фамилию"
      })
    } else {
      if (lastnameValue.toLowerCase() !== validLastnameValue) {
        this.setState({
          lastnameValidateMsg: "Фамилия указана не верно"
        })
      }
    }

    if (!passwordValue) {
      this.setState({
        passwordValidateMsg: "Нужно указать пароль"
      })
    } else {
      if (passwordValue !== validPasswordValue) {
        this.setState({
          passwordValidateMsg: "Пароль указан не верно"
        })
      }
    }
  }

  render() {
    const { firstnameValue, lastnameValue, passwordValue, firstnameValidateMsg, lastnameValidateMsg, passwordValidateMsg, isSucsess } = this.state

    return (
      <div className="app-container">
        {isSucsess
          ? <img src={BondImg} alt="bond approve" className="t-bond-image" />
          :
          <form onSubmit={this.handleSubmit}>
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">
                  Имя
              </span>
              </label>
              <input className="field__input field-input t-input-firstname" type="text" name="firstname" onChange={this.handleFirstnameChange} value={firstnameValue} />
              <span className="field__error field-error t-error-firstname">{firstnameValidateMsg}</span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">
                  Фамилия
              </span>
              </label>
              <input className="field__input field-input t-input-lastname" type="text" name="lastname" onChange={this.handleLastnameChange} value={lastnameValue} />
              <span className="field__error field-error t-error-lastname">{lastnameValidateMsg}</span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">
                  Пароль
              </span>
              </label>
              <input className="field__input field-input t-input-password" type="password" name="password" onChange={this.handlePasswordChange} value={passwordValue} />
              <span className="field__error field-error t-error-password">{passwordValidateMsg}</span>
            </p>
            <div className="form__buttons"><input type="submit" className="button t-submit" value="Проверить" /></div>
          </form>
        }
      </div>
    )
  }
}

export default Form
