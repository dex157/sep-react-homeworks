import React, { Component } from 'react';
import { Field } from './FormFieldStaff.js';
import './Form.css';
import { Picture, initialState } from './constants.js';

class Form extends Component {
  state = {
    ...initialState
  };

  handleSubmit = event => {
    var errors = this.state.errors;

    if (event && event.type === 'submit') {
      event.preventDefault();
    }

    Object.keys(errors).map(
      error => (errors[error] = this.validateField([error]))
    );

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

              {Object.keys(this.state.inputs).map((fieldName, key) => (
                <Field
                  key={key}
                  fieldName={fieldName}
                  fieldValue={inputs[fieldName].inputValue}
                  frontName={inputs[fieldName].inputName}
                  error={errors[fieldName]}
                  onChangeFunc={this.handleChange}
                />
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
