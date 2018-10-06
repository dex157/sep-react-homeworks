import React, { Component } from 'react';
import './Form.css'
import Image from './assets/bond_approve.jpg';
import {values, initialState} from './constants';

class Form extends Component {
    state = {
        ...initialState
    }

    verifyBond = e => {
        e.preventDefault();
        const {firstName, lastName, password} = this.state;

        let errors = {
            firstName: this.checkInput(firstName.value, values[0]),
            lastName: this.checkInput(lastName.value, values[1]),
            password: this.checkInput(password.value, values[2])
        }

        this.setState({
            firstName: {
                value: errors.firstName.value, 
                error: errors.firstName.error
            },
            lastName: {
                value: errors.lastName.value, 
                error: errors.lastName.error
            },
            password: {
                value: errors.password.value, 
                error: errors.password.error
            },
        })

        if (errors.firstName.error === '' &&
            errors.lastName.error === '' &&
            errors.password.error === '') {
                this.setState({isValid: true});
        }
    }

    checkInput = (value, error) => {
        let result = {
            value: '',
            error: ''
        };

        result.value = value;

        if (value === '') {
            result.error = error.emptyInput;
        } else if (value.toLowerCase() !== error.value.toLowerCase()) {
            result.error = error.invalidInput;
        } else {
            result.error = '';
        }

        return result;
    }
    
    onChange = e => {
        const {value, name} = e.target;
        const {firstName, lastName, password} = this.state;
            
        this.setState({
            firstName: {value: firstName.value, error: ''},
            lastName: {value: lastName.value, error: ''},
            password: {value: password.value, error: ''}
        });
        this.setState({
            [name]: {'value': `${value}`, error: ''},
        });
    }

    render() {
        const inputs = [
            {tag: 'firstname', name: 'firstName', title: 'Имя', type: 'text'},
            {tag: 'lastname', name: 'lastName', title: 'Фамилия', type: 'text'},
            {tag: 'password', name: 'password', title: 'Пароль', type: 'password'}
        ];

        return(
            <div className="app-container"> {
                this.state.isValid ? (
                    <img 
                        src={Image} 
                        alt="bond approve" 
                        className="t-bond-image"
                    >
                    </img>                
                ) : (
                <form className="form">
                    <h1>Введите свои данные, агент</h1>

                    {Object.keys(inputs).map((input) => (
                        <p className = "field" key={inputs[input].name}>
                        <label className = "field__label" htmlFor={inputs[input].name}>
                            <span className = "field-label">{inputs[input].title}</span>
                        </label>
                        <input 
                            className = {`field__input field-input t-input-${inputs[input].tag}`}
                            type = {inputs[input].type}
                            name = {inputs[input].name}
                            value = {this.state[inputs[input].name].value}
                            onChange = {this.onChange}
                        >
                        </input>
                        <span className = {`field__error field-error t-error-${inputs[input].tag}`}>{this.state[inputs[input].name].error}</span>
                    </p>
                    ))}

                    <div className = "form__buttons">
                        <input
                            className = "button t-submit"
                            type = "submit"
                            value = "Проверить"
                            onClick = {this.verifyBond}
                        >
                        </input>
                    </div>
                </form>
                ) 
            } </div>
        )
    }
} 

export default Form;