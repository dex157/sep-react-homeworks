import React, { Component } from 'react';
import './Field';

function Error(props) {
  return <span className={props.name}>{props.message}</span>;
}

function Label(props) {
  return (
    <label className="field__label" htmlFor={props.name}>
      <span className="field-label">{props.title}</span>
    </label>
  );
}

class Field extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onFieldChange(e);
  }

  render() {
    const { name, value, title, error } = this.props,
      inputClassName = 'field__input field-input t-input-' + name,
      errorClassName = 'field__error field-error t-error-' + name;
    return (
      <p className="field">
        <Label name={name} title={title} />
        <input
          type="text"
          className={inputClassName}
          name={name}
          value={value}
          onChange={this.handleChange}
        />
        <Error name={errorClassName} message={error} />
      </p>
    );
  }
}

export default Field;