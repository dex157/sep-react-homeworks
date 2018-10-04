import React,  { Component } from 'react';
import './Form.css';
import bondImg from './assets/bond_approve.jpg'

class Form extends Component {
    state = {
        firstName: { value: '', error: false, errorText: '', truth: "James"},
        lastName: { value: '', error: false, errorText: '', truth: "Bond"},
        password: { value: '', error: false, errorText: '', truth: "007"},
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
                    [field]: {value: this.state[field].value, error: true, errorText: 'заполните поле', truth: this.state[field].truth},
                    bond: false
                });

            } else if(this.state[field].value !== this.state[field].truth){
                this.setState({
                    [field]: {value: this.state[field].value, error: true, errorText: `значение поля ${field} не соответствует`, truth: this.state[field].truth},
                    bond: false
                });
            } 
        });
        if(!element.firstName.error && !element.lastName.error && !element.password.error){
            this.setState({
                bond: true
            })
        }
    }
    render (){
        const fieldInput = [
            {name: 'firstName', transName: 'Имя', type: 'text'},
            {name: 'lastName', transName: 'Фамилия', type: 'text'},
            {name: 'password', transName: 'пороль', type: 'password'}

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
                    className="field__input field-input"
                    key={field.name}
                    name={field.name}
                    value={this.state[field.name].value}
                    type={field.type}
                    onChange={this.handleChange}
                    />
                    {this.state[field.name].error ? (
                    <span className="field__error field-error">{this.state[field.name].errorText}</span>): (
                        <span className="field__error field-error"></span>
                    )
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
            <img src={bondImg} alt=""/>
            </div>
        )
        
        );
    }
}
export default Form;