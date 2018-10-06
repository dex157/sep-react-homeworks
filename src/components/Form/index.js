import React, {Component} from 'react'
import './Form.css'
import Field from '../Field'


class Form extends Component{
    state = {
        initData : [
            {
                name : "firstname",
                labelText : "Имя",
                inputClass : "field__input field-input t-input-firstname",
                type : "text",
                value : "",
                errorClass : "field__error field-error t-error-firstname",
                errorText : "Имя указано не верно"
            },
            {
                name : "lastname",
                labelText : "Фамилия",
                inputClass : "field__input field-input t-input-lastname",
                type : "text",
                value : "",
                errorClass : "field__error field-error t-error-lastname",
                errorText : "Фамилия указана не верно"
            },
            {
                name : "password",
                labelText : "Пароль",
                inputClass : "field__input field-input t-input-password",
                type : "password",
                value : "",
                errorClass : "field__error field-error t-error-password",
                errorText : "Пароль указан не верно"
            },
        ]
    }


    validateForm = (e) => {
        console.log(e);
        e.preventDefault();
        console.log("test");
        this.setState((state) => {
            return {initData : state.initData.map((data) => (            
                {...data, errorText : "test"}
                ))
            }
          });
    };

    render(){
        return(
            <div className="app-container">
                <form className="form" onSubmit = {this.validateForm}>
                    <h1>Введите свои данные, агент</h1>
                    {this.state.initData.map((data) => {
                        return <Field data={data} key={data.name}/>
                    })}
                    <div className="form__buttons">
                        <input 
                            type="submit" 
                            className="button t-submit"                             
                            value="Проверить"
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default Form;

