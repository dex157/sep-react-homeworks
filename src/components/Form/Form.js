import React, {Component} from 'react';
import './Form.css';
import bondImg from './assets/bond_approve.jpg';

class Form extends Component {
    state = {
        firstname: {value: '', error: ''},
        lastname: {value: '', error: ''},
        password: {value: '', error: ''},
        bond: false
    }

    onChangeHandler = (e) => {
        let value = e.target.value,
            name = e.target.name;

        this.setState({
            firstname: {value: this.state.firstname.value, error: ''},
            lastname: {value: this.state.lastname.value, error: ''},
            password: {value: this.state.password.value, error: ''}
        });
        this.setState({
            [name]: {'value': `${value}`, error: ''},
        });
    }

    onClickHandler = (e) => {
        e.preventDefault();
        let firstnameError = {
                value: true, 
                errorEmptyVal: 'Нужно указать имя',
                errorVal: 'Имя указано не верно',
                progVal: 'James'
            },
            lastnameError  = {
                value: true, 
                errorEmptyVal: 'Нужно указать фамилию',
                errorVal: 'Фамилия указана не верно',
                progVal: 'Bond'
            },
            passwordError  = {
                value: true, 
                errorEmptyVal: 'Нужно указать пароль',
                errorVal: 'Пароль указан не верно',
                progVal: '007'
            };

        let result = {
            firstname: this.validateInp(this.state.firstname.value, firstnameError),
            lastname: this.validateInp(this.state.lastname.value, lastnameError),
            password: this.validateInp(this.state.password.value, passwordError)
        };

        this.setState({
            firstname: {value: result.firstname.value, error: result.firstname.error},
            lastname: {value: result.lastname.value, error: result.lastname.error},
            password: {value: result.password.value, error: result.password.error}
        });
            
        
        if(result.firstname.error === '' &&
           result.lastname.error === '' && 
           result.password.error === '') {
            this.setState({
                bond: true
            });
        }
    }

    validateInp(value, error) {
        let result = {
                value: value, 
                error: ''
            };
        if(value  === '') {
            result.value = value;
            result.error = error.errorEmptyVal;
        } else {
            if(value.toLowerCase()  !== error.progVal.toLowerCase()) {
                result.value = value;
                result.error = error.errorVal;
            }
        }
        return result;
    }

    render() {

        const inputs = [
            {name: 'firstname', russName: 'Имя', type: 'text'},
            {name: 'lastname', russName: 'Фамилия', type: 'text'},
            {name: 'password', russName: 'Пароль', type: 'password'}
        ];

        let {bond} = this.state;

        return (
            !bond ? (
                <div className="app-container">
                    <form className="form" autoComplete="off">
                        <h1>Введите свои данные, агент</h1>

                        {Object.keys(inputs).map((inputType) => (
                            <p className="field" key={inputs[inputType].name}>
                                <label className="field__label" htmlFor={inputs[inputType].name}>
                                    <span className="field-label">{inputs[inputType].russName}</span>
                                </label>
                                <input className={`field__input field-input t-input-${inputs[inputType].name}`} type={inputs[inputType].type} name={inputs[inputType].name} value={this.state[inputs[inputType].name].value} onChange={this.onChangeHandler}/>
                                <span className={`field__error field-error t-error-${inputs[inputType].name}`}>{this.state[inputs[inputType].name].error}</span>
                            </p>
                        ))}
                    
                        <div className="form__buttons">
                            <input type="submit" className="button t-submit" value="Проверить" onClick={this.onClickHandler}/>
                        </div>
                    </form>
                </div> 
            ) :
            (
                <div className="app-container">
                    <img src={bondImg} alt="bond approve" className="t-bond-image"></img>
                </div>   
            )
        )
    }
}

export default Form;