import React from 'react';
import './Form.css';
import isLoginPic from './assets/bond_approve.jpg';

class Form extends React.Component {
  state = {
    inputs: {
      firstname: {
        inputName: 'Имя',
        inputValue: '',
        error: ''
      },
      lastname: {
        inputName: 'Фамилия',
        inputValue: '',
        error: ''
      },
      password: {
        inputName: 'Пароль',
        inputValue: '',
        error: ''
      }
    },
    admin: {
      firstname: 'james',
      lastname: 'bond',
      password: '007'
    },
    isLogIn: false
  };

  handleOnSubmit = e => {
    if (e && e.type === 'submit') {
      e.preventDefault();
    }
    const { inputs, admin } = this.state;
    Object.keys(inputs).map(field => {
      let value = inputs[field].inputValue;
      if (value) {
        if (value.toLowerCase() === admin[field]) {
          console.log(inputs[field].inputValue, 'true');
          return '';
        } else {
          this.setState({
            inputs: {
              ...this.state.inputs,
              [field]: {
                ...inputs[field],
                error: `неверно указано ${inputs[field].inputName}`
              }
            }
          });
          console.log(inputs[field].inputValue, 'false');
          return '';
        }
      } else {
          console.log(inputs[field].inputName);
        this.setState({
          inputs: {
            ...this.state.inputs,
            [field]: {
              ...this.state.inputs[field],
              error: `необходимо указать ${inputs[field].inputName}`
            }
          }
        });
        return false;
      }
    });
  };
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleOnSubmit();
    }
  };
  handleOnChange = e => {
    this.setState({
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

            {Object.keys(inputs).map((field, i) => (
              <p className="field" key={i}>
                <label className="field__label" htmlFor={field}>
                  <span className="field-label">{inputs[field].inputName}</span>
                </label>
                <input
                  className={`field__input t-input-${field}`}
                  type="text"
                  name={field}
                  value={inputs[field].inputValue}
                  onChange={this.handleOnChange}
                />
                <span className={`field__error field-error t-error-${field}`}>
                  {inputs[field].error}
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
