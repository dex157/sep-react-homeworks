import React, { Component } from 'react';
import './Form.css';
import Picture from './assets/bond_approve.jpg';

class Form extends Component {
  state = {
    inputs: {
      firstname: {
        inputName: 'Имя',
        inputValue: '',
        errors: {
          emptyMessage: 'Нужно указать имя',
          wrongMessage: 'Имя указано не верно'
        }
      },
      lastname: {
        inputName: 'Фамилия',
        inputValue: '',
        errors: {
          emptyMessage: 'Нужно указать фамилию',
          wrongMessage: 'Фамилия указана не верно'
        }
      },
      password: {
        inputName: 'Пароль',
        inputValue: '',
        errors: {
          emptyMessage: 'Нужно указать пароль',
          wrongMessage: 'Пароль указан не верно'
        }
      }
    },
    credits: {
      firstname: 'james',
      lastname: 'bond',
      password: '007'
    },
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    },
    isValid: false
  };

  handleSubmit = event => {
    var errors = this.state.errors;

    if (event && event.type === 'submit') {
      event.preventDefault();
    }
        
    Object.keys(errors).map((error) => (
      errors[error] = this.validateField([error])
    ));

    this.setState({
      errors,
      isValid: !errors.firstname && !errors.lastname && !errors.password
    });
  };

  handleChange = event => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [event.target.name]: {
          ...this.state.inputs[event.target.name],
          inputValue: event.target.value
        }
      },
      errors: {
        firstname: '',
        lastname: '',
        password: ''
      }
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  };

  validateField = fieldName => {
    const { credits, inputs } = this.state;
    const value = this.state.inputs[fieldName].inputValue;

    if (value) {
      if (credits[fieldName] === value.toLowerCase()) {
        return '';
      } else {
        return inputs[fieldName].errors.wrongMessage;
      }
    } else {
      return inputs[fieldName].errors.emptyMessage;
    }
  };

  render() {
    const { inputs, errors, isValid } = this.state;

    return (
      <div className="app-container">
        {isValid ? (
          <img src={Picture} alt="bond approve" className="t-bond-image" />
        ) : (
          <div>
            <form
              className="form"
              onKeyPress={this.handleKeyPress}
              onSubmit={this.handleSubmit}
            >
              <h1>Введите свои данные, агент</h1>

              {Object.keys(this.state.inputs).map((fieldname, key) => (
                <p className="field" key={key}>
                  <label className="field__label" htmlFor={fieldname}>
                    <span className="field-label">
                      {inputs[fieldname].inputName}
                    </span>
                  </label>
                  <input
                    className={`field__input field-input t-input-${fieldname}`}
                    type="text"
                    name={fieldname}
                    value={inputs[fieldname].inputValue}
                    onChange={this.handleChange}
                  />
                  <span
                    className={`field__error field-error t-error-${fieldname}`}
                  >
                    {errors[fieldname]}
                  </span>
                </p>
              ))}
              <div className="form__buttons">
                <input
                  type="submit"
                  className="button t-submit"
                  value="Проверить"
                  onClick={this.handleSubmit}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
