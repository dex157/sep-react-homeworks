import React from "react";
import "./Form.css";
import bond_approve from "./assets/bond_approve.jpg";

class Blank extends React.Component {
  render() {
    return (
      <div className="app-container">
        <form className="form">
          <h1>Введите свои данные, агент</h1>
          <p className="field">
            <label className="field__label" htmlFor="firstname">
              <span className="field-label">Имя</span>
            </label>
            <input className="field__input field-input t-input-firstname" type="text" name="firstname"
                   value={this.name} ref={this.props.f1} onChange={this.props.onchange}/>
            <span className="field__error field-error t-error-firstname"/>
          </p>
          <p className="field">
            <label className="field__label" htmlFor="lastname">
              <span className="field-label">Фамилия</span>
            </label>
            <input className="field__input field-input t-input-lastname" type="text" name="lastname"
                   value={this.lastname} ref={this.props.f2} onChange={this.props.onchange}/>
            <span className="field__error field-error t-error-lastname"/>
          </p>
          <p className="field">
            <label className="field__label" htmlFor="password">
              <span className="field-label">Пароль</span>
            </label>
            <input className="field__input field-input t-input-password" type="password" name="password"
                   value={this.password} ref={this.props.f3} onChange={this.props.onchange}/>
            <span className="field__error field-error t-error-password"/>
          </p>
          <div className="form__buttons">
            <input type="submit" className="button t-submit" value="Проверить"
                   onClick={this.props.onclick}/>
          </div>
        </form>
      </div>
    );
  }
}

class Success extends React.Component {
  render() {
    return (
      <div className="app-container">
        <img src={bond_approve} alt="bond approve" className="t-bond-image"/>
      </div>
    );
  }
}

export default class Form extends React.Component {
  state = {
    currentState: false
  };

  requiredData = {
    name: {
      value: "JAMES",
      emptyValue: "Нужно указать имя",
      wrongValue: "Имя указано не верно"
    },
    lastname: {
      value: "BOND",
      emptyValue: "Нужно указать фамилию",
      wrongValue: "Фамилия указана не верно"
    },
    password: {
      value: "007",
      emptyValue: "Нужно указать пароль",
      wrongValue: "Пароль указан не верно"
    }
  };

  check = (field, reqObj) => {
    if (field.value === "") {
      field.nextSibling.innerText = reqObj.emptyValue;
      return false;
    } else if (field.value.toUpperCase() === reqObj.value) {
      return true;
    } else {
      field.nextSibling.innerText = reqObj.wrongValue;
      return false;
    }
  };

  dataMatch = (name, lastname, password) => {
    let f1 = this.check(name, this.requiredData.name),
      f2 = this.check(lastname, this.requiredData.lastname),
      f3 = this.check(password, this.requiredData.password);

    return f1 && f2 && f3;
  };

  clickButtonHandler = (event) => {
    event.preventDefault();

    let currentName = this.nameField.current,
      currentLastName = this.lastnameField.current,
      currentPassword = this.passwordField.current;

    if (this.dataMatch(currentName, currentLastName, currentPassword)) {
      this.setState({ currentState: true });
    }
  };
  onChangeHandler = () => {
    this.nameField.current.nextSibling.innerText = "";
    this.lastnameField.current.nextSibling.innerText = "";
    this.passwordField.current.nextSibling.innerText = "";
  };

  constructor(props) {
    super(props);
    this.nameField = React.createRef();
    this.lastnameField = React.createRef();
    this.passwordField = React.createRef();
  }

  render() {
    const { currentState } = this.state;

    if (currentState) {
      return <Success/>;
    } else {
      return <Blank f1={this.nameField} f2={this.lastnameField} f3={this.passwordField}
                    onclick={this.clickButtonHandler} onchange={this.onChangeHandler}/>;
    }

  };
}