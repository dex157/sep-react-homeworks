import React, { Component } from 'react';
import './Form.css';
import FormField from './FormField';
import formFields from './formFields';

const initialState = {
  firstName: '',
  lastName: '',
  password: '',
  errors: {}
};

class Form extends Component {
  state = initialState;

  /**
   * обработчик отправки формы
   */
  _handleSubmit = e => {
    e.preventDefault();

    const { handleSubmit } = this.props;
    const errors = this.validateFields(formFields);

    if (Object.entries(errors).length > 0) {
      this.setState({
        errors
      });
      return;
    }
    this.setState(initialState);
    handleSubmit();
  };

  /**
   * обработчик изменения значения поля формы
   */
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {}
    });
  };

  /**
   * рендеринг полей формы
   */
  renderFields = () => {
    const { errors } = this.state;

    return formFields.map(({ name, label, type, addClass }) => (
      <FormField
        name={name}
        key={name}
        labelValue={label}
        type={type}
        addClass={addClass}
        value={this.state[name]}
        error={errors[name]}
        handleChange={this.handleChange}
      />
    ));
  };

  /**
   * Валидация полей формы
   * @param {Object[]} fields - Массив полей для валидации
   */
  validateFields = fields => {
    const errors = {};

    fields.forEach(({ name, expectedValue }) => {
      const error = this.validateField(name, this.state[name], expectedValue);
      if (error) {
        errors[name] = error;
      }
    });
    return errors;
  };

  /**
   * Валидация поля формы
   * @param {string} fieldName - имя поля формы
   * @param {string} actualValue - текущие значение
   * @param {string} expectedValue - ожидаемое значение
   */
  validateField = (fieldName, actualValue, expectedValue) => {
    const actual = actualValue.toLowerCase();
    const expected = expectedValue.toLowerCase();

    if (!actual) {
      switch (fieldName) {
        case 'firstName':
          return 'Нужно указать имя';
        case 'lastName':
          return 'Нужно указать фамилию';
        case 'password':
          return 'Нужно указать пароль';
        default:
          return '';
      }
    } else if (actual !== expected) {
      switch (fieldName) {
        case 'firstName':
          return 'Имя указано не верно';
        case 'lastName':
          return 'Фамилия указана не верно';
        case 'password':
          return 'Пароль указан не верно';
        default:
          return '';
      }
    }
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <h1>Введите свои данные, агент</h1>
        {this.renderFields()}
        <div className="form__buttons">
          <button type="submit" className="button t-submit">
            Проверить
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
