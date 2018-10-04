import React, { Component } from 'react';

class Field extends Component {
    handleChange = e => {
        const elem = e.target;

        this.props.onChange(elem.name, elem.value);
    };

    render() {
        const { name, type, nameLabel, error } = this.props;

        return (
            <p className="field">
                <label className="field__label">
                    <span className="field-label">{nameLabel}</span>
                </label>
                <input
                    className={`field__input field-input t-input-${name}`}
                    type={type}
                    name={name}
                    onChange={this.handleChange}
                />
                <span className={`field__error field-error t-error-${name}`}>
                    {error}
                </span>
            </p>
        );
    }
}

export default Field;
