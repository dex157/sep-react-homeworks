import React, { Component } from 'react';
import Field from './Field.js';
import { fields } from './fields.js';
import './Form.css';

class Form extends Component {
    state = {
        firstname: {},
        lastname: {},
        password: {}
    };
    handleForm = e => {
        e.preventDefault();
        let validation = true;

        fields.forEach(elem => {
            const value = this.state[elem.name].value;
            let errorMessage = '';

            if (!value) {
                errorMessage = elem.message.empty;
                validation = false;
            } else if (value.toLowerCase() !== elem.correct.toLowerCase()) {
                errorMessage = elem.message.incorrect;
                validation = false;
            } else errorMessage = '';
            this.setState({
                [elem.name]: {
                    value: value,
                    error: errorMessage
                }
            });
        });

        this.props.onApp(validation);
    };
    handleInput = (name, value) => {
        let actualValue = '';
        fields.forEach(elem => {
            if (name === elem.name) actualValue = value;
            else actualValue = this.state[elem.name].value;
            this.setState({
                [elem.name]: {
                    value: actualValue,
                    error: ''
                }
            });
        });
    };

    render() {
        return (
            <form onSubmit={this.handleForm} className="form">
                <h1>Введите свои данные, агент</h1>
                {fields.map(elem => {
                    return (
                        <Field
                            name={elem.name}
                            type={elem.type}
                            error={this.state[elem.name].error}
                            nameLabel={elem.nameLabel}
                            value={this.state[elem.name]}
                            key={elem.name}
                            onChange={this.handleInput}
                        />
                    );
                })}
                <div className="form__buttons">
                    <input
                        type="submit"
                        className="button t-submit"
                        value="Проверить"
                    />
                </div>
            </form>
        );
    }
}

export default Form;
