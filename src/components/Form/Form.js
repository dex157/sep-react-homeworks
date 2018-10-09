import React,  { Component } from 'react';
import './Form.css';
import bondImg from './assets/bond_approve.jpg'

class Form extends Component {
    state = {
        firstname: { value: '', errorEmpty: false, errorIndent: false,  truth: "James"},
        lastname: { value: '', errorEmpty: false, errorIndent: false,  truth: "Bond"},
        password: { value: '', errorEmpty: false, errorIndent: false,  truth: "007"},
        bond: false
    };
    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;   
        this.setState({
            [name]: {value: `${value}`, error: false, errorText: '', truth: this.state[name].truth}
        });
    }
    handleOnClick = (event) => {
        event.preventDefault();
        let element =  this.state;
        Object.keys(element).map((field) => {
            if(this.state[field].value === ''){
                this.setState({
                    [field]: {value: this.state[field].value, errorEmpty: true, errorIndent: false, truth: this.state[field].truth},
                    bond: false
                });

            } else if(this.state[field].value !== this.state[field].truth){
                this.setState({
                    [field]: {value: this.state[field].value, errorEmpty: false, errorIndent: true, truth: this.state[field].truth},
                    bond: false
                });
            } 
        });
        let isBond = (element) => {
            let array = Object.keys(element).map((field) => {
                let value = this.state[field].value;
                if(value){
                    if(this.state[field].value.toUpperCase()!== this.state[field].truth.toUpperCase()){
                        return false;
                    } else {
                        return true;
                    } 
                }
            });
            delete array[3];
            return array.every((field) => {
                return field === true;
            })
        }

        let state = this.state;
        this.setState({
            bond: isBond(state)
        });
    }
    render (){
        const fieldInput = [
            {name: 'firstname', transName: 'имя',transNameIndent: 'Имя указано не верно', type: 'text'},
            {name: 'lastname', transName: 'фамилию',transNameIndent: 'Фамилия указана не верно', type: 'text'},
            {name: 'password', transName: 'пароль',transNameIndent: 'Пароль указан не верно', type: 'password'}

        ]
        const {bond} = this.state;
        return (
            
        !bond ? (
            <div className="app-container">
            <h1>Введите свои данные, агент</h1>
            {fieldInput.map(field => (
                <p key={field.name} className="field">
                    <label className="field__label" htmlFor={field.name}>
                        <span className="field-label">{field.transName}</span>
                    </label>
                    <input
                    className={`field__input field-input t-input-${field.name}`}
                    key={field.name}
                    name={field.name}
                    value={this.state[field.name].value}
                    type={field.type}
                    onChange={this.handleChange}
                    />
                    {this.state[field.name].errorEmpty ? (
                    <span className={`field__error field-error t-error-${field.name}`}>Нужно указать {field.transName}</span>): (this.state[field.name].errorIndent ) ? (
                        <span className={`field__error field-error t-error-${field.name}`}>{field.transNameIndent}</span>
                    ): (<span className="field__error field-error"></span>)
                }
                </p>
            ))}
                <div className="form__buttons">
                    <button type="submit" className="button t-submit" onClick={this.handleOnClick}>Проверить</button>
                </div>
        </div>
        ): 
        (
            <div className="app-container">
            <img className="t-bond-image" src={bondImg} alt=""/>
            </div>
        )
        
        );
    }
}
export default Form;