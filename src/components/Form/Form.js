import React from 'react';
import './Form.css';
import isLoginPic from './assets/bond_approve.jpg';

class Form extends React.Component {
  state = {
    firstname: '',
    firstnameErMessage: '',
    lastname: '',
    lastnameErMessage: '',
    password: '',
    passwordErMessage: '',
    isLoggedIn: false
  };

  //Validation
  validateFirstName = value => {
    if (value.length > 0) {
      if (value !== 'James' && value !== 'james') {
        this.setState({ firstnameErMessage: 'Имя указано не верно' });
        return false;
      } else {
        this.setState({ firstnameErMessage: '' });
        return true;
      }
    } else {
      this.setState({ firstnameErMessage: 'Нужно указать имя' });
      return false;
    }
  };

  validateLastName = value => {
    if (value.length > 0) {
      if (value !== 'Bond' && value !== 'bond') {
        this.setState({ lastnameErMessage: 'Фамилия указана не верно' });
        return false;
      } else {
        this.setState({ lastnameErMessage: '' });
        return true;
      }
    } else {
      this.setState({ lastnameErMessage: 'Нужно указать фамилию' });
      return false;
    }
  };

  validatePassword = value => {
    if (value.length > 0) {
      if (value !== '007') {
        this.setState({ passwordErMessage: 'Пароль указан не верно' });
        return false;
      } else {
        this.setState({ passwordErMessage: '' });
        return true;
      }
    } else {
      this.setState({ passwordErMessage: 'Нужно указать пароль' });
      return false;
    }
  };

  onChangeField = event => {
    var val = event.target.value;
    var label = event.target.name;
    this.setState({
      [label]: val,
      firstnameErMessage: '',
      lastnameErMessage: '',
      passwordErMessage: ''
    });
  };

  handSubmit = event => {
    event.preventDefault();
    var firstNameIsvalidate = this.validateFirstName(this.state.firstname);
    var lastNameIsvalidate = this.validateLastName(this.state.lastname);
    var passwordIsvalidate = this.validatePassword(this.state.password);
    if (firstNameIsvalidate && lastNameIsvalidate && passwordIsvalidate) {
      console.log('norm');
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    let content;

    if (this.state.isLoggedIn) {
      content = (
        <img src={isLoginPic} alt="bond approve" class="t-bond-image" />
      );
    } else {
      content = (
        <form className="form" onSubmit={this.handSubmit}>
          <h1>Введите свои данные, агент</h1>

          {/* Name field */}
          <p className="field">
            <label className="field__label" for="firstname">
              <span className="field-label">Имя</span>
            </label>
            <input
              className="field__input field-input t-input-firstname"
              type="text"
              name="firstname"
              value={this.state.name}
              onChange={this.onChangeField}
            />
            <span className="field__error field-error t-error-firstname">
              {this.state.firstnameErMessage}
            </span>
          </p>

          {/* Lastname field */}
          <p className="field">
            <label className="field__label" for="lastname">
              <span className="field-label">Фамилия</span>
            </label>
            <input
              className="field__input field-input t-input-lastname"
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.onChangeField}
            />
            <span className="field__error field-error t-error-lastname">
              {this.state.lastnameErMessage}
            </span>
          </p>

          {/* Password field */}
          <p className="field">
            <label className="field__label" for="password">
              <span className="field-label">Пароль</span>
            </label>
            <input
              className="field__input field-input t-input-password"
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.onChangeField}
            />
            <span className="field__error field-error t-error-password">
              {this.state.passwordErMessage}
            </span>
          </p>

          {/* Submit button */}
          <div className="form__buttons">
            <input
              type="submit"
              className="button t-submit"
              value="Проверить"
            />
          </div>
        </form>
      );
    }

    return <div className="app-container">{content}</div>;
  }
}

export default Form;
