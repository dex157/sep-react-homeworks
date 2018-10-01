import React, { Component } from 'react';
import './Form.css';
import Bond from './assets/bond_approve.jpg';

class Form extends Component {
  state = {
    inputs: {
      firstName: {
        fieldName: 'Имя',
        fieldValue: '',
        messages: {
          empty: 'Нужно указать имя',
          wrong: 'Имя указано неверно'
        }
      },
      lastName: {
        fieldName: 'Фамилия',
        fieldValue: '',
        messages: {
          empty: 'Нужно указать фамилию',
          wrong: 'Фамилия указана неверно'
        }
      },
      pass: {
        fieldName: 'Пароль',
        fieldValue: '',
        messages: {
          empty: 'Нужно указать пароль',
          wrong: 'Пароль указан неверно'
        }
      }
    },
    messages: {
      firstName: '',
      lastName: '',
      pass: ''
    },
    current: {
      firstName: 'james',
      lastName: 'bond',
      pass: '007'
    },
    showBond: false
  };

  valueChange = e => {
    const target = e.target;
    this.setState({
      inputs: {
        ...this.state.inputs,
        [target.name]: {
          ...this.state.inputs[target.name],
          value: target.value
        }
      }
    });
  };

  validationForm = fields => {
    const { inputs, current } = this.state;
    const value = this.state.inputs[fields].value;

    if (value) {
      if (current[fields] === value.tolowerCase()) {
        return '';
      } else {
        return inputs[fields].messages.wrong;
      }
    } else {
      return inputs[fields].messages.empty;
    }
  };

  formSend = e => {
    const messages = this.state.messages;
    if (e.type === 'submit') {
      e.preventDefault();
      Object.keys(messages).map(
        message => (messages[message] = this.validationForm([message]))
      );
      this.setState({
        messages,
        showBond: !messages.firstname && !messages.lastname && !messages.pass
      });
    }
  };

  render() {
    const { inputs, messages, showBond } = this.state;
    return (
      <div className="app-container">
        {showBond ? (
          <img src={Bond} alt="bond approve" className="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.formSend}>
            <h1>Введите свои данные, агент</h1>

            {Object.keys(this.state.inputs).map((fields, i) => (
              <p className="field" key={i}>
                <label className="field__label" htmlFor={fields}>
                  <span className="field-label">
                    {inputs[fields].fieldName}
                  </span>
                </label>
                <input
                  className={`field__input field-input t-input-${fields}`}
                  type="text"
                  name={fields}
                  value={inputs[fields].fieldValue}
                  onChange={this.valueChange}
                />
                <span className={`field__error field-error t-error-${fields}`}>
                  {messages[fields]}
                </span>
              </p>
            ))}

            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
                onClick={this.formSend}
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Form;
