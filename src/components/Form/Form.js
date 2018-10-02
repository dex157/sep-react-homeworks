import React from 'react';
import './Form.css';

class Form extends React.Component {
  state = {
    name: '',
    nameValid: false,
    nameErMessage: ''
  };

  validateName = name => {
    if (name.length > 0) {
      if (name !== 'James') {
        this.setState({ nameErMessage: 'Имя указано не верно' });
      } else {
        this.setState({ nameErMessage: '' });
      }
    } else {
      this.setState({ nameErMessage: 'Нужно указать имя' });
    }
  };

  onChangeName = event => {
    var val = event.target.value;
    this.setState({ name: val });
    this.setState({ nameErMessage: '' });
  };

  handSubmit = event => {
    event.preventDefault();
    this.validateName(this.state.name);
  };

  render() {
    return (
      <div className="app-container">
        <form className="form" onSubmit={this.handSubmit}>
          <h1>Введите свои данные, агент</h1>
          <p className="field">
            <label className="field__label" for="firstname">
              <span className="field-label">Имя</span>
            </label>
            <input
              className="field__input field-input t-input-firstname"
              type="text"
              name="firstname"
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <span className="field__error field-error t-error-firstname">
              {this.state.nameErMessage}
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
      </div>
    );
  }
}

export default Form;
