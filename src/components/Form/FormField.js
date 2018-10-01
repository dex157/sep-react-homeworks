import React from 'react';

export default ({
  name,
  labelValue,
  type,
  addClass,
  value,
  error,
  handleChange
}) => {
  return (
    <p className="field">
      <label className="field__label" form={name}>
        <span className="field-label">{labelValue}</span>
      </label>
      <input
        type={type}
        className={`field__input field-input t-input-${addClass}`}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span className={`field__error field-error t-error-${addClass}`}>
        {error}
      </span>
    </p>
  );
};
