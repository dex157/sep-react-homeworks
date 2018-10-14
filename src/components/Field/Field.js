import React, { Component } from 'react';
import style from '../LoginForm/LoginForm.module.css';

class Field extends Component {
  render() {
    const { handleChange, values, id, label, type } = this.props;
    return (
      <p>
        <label htmlFor={id}>
          <span className={style.labelText}>{label}</span>
        </label>
        <input
          type={type}
          name={id}
          className={`${style.input} t-input-${id}`}
          onChange={handleChange}
          value={values[id]}
        />
      </p>
    );
  }
}

export default Field;
