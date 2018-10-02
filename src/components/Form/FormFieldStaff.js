import React from 'react';
import propTypes from 'prop-types';

export const Label = ({ fieldName, inputname }) => {
  return (
    <label className="field__label" htmlFor={fieldName}>
      <span className="field-label">{inputname}</span>
    </label>
  );
};

Label.propTypes = {
  fieldName: propTypes.string.isRequired,
  inputname: propTypes.string.isRequired,
};

export const Input = ({ fieldName, value, onChangeFunc }) => {
  return (
    <input
      className={`field__input field-input t-input-${fieldName}`}
      type="text"
      name={fieldName}
      value={value}
      onChange={onChangeFunc}
    />
  );
};

Input.propTypes = {
  fieldName: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChangeFunc: propTypes.func.isRequired,
};

export const Error = ({ fieldName, errorString }) => {
  return (
    <span className={`field__error field-error t-error-${fieldName}`}>
      {errorString}
    </span>
  );
};

Error.propTypes = {
  fieldName: propTypes.string.isRequired,
  errorString: propTypes.string.isRequired,
};

export const Field = ({fieldName, frontName, fieldValue, error, onChangeFunc}) => {
  return (
    <p className="field" >
      <Label inputname={frontName} fieldName={fieldName} />
      <Input
        fieldName={fieldName}
        value={fieldValue}
        onChangeFunc={onChangeFunc}
      />
      <Error fieldName={fieldName} errorString={error} />
    </p>
  );
};

Field.propTypes = {
  fieldName: propTypes.string.isRequired,
  frontName: propTypes.string.isRequired,
  fieldValue: propTypes.string.isRequired, 
  error: propTypes.string.isRequired, 
  onChangeFunc: propTypes.func.isRequired
};

