import React, {Component} from 'react'
import './Form.css'
import Field from '../Field'
import imgBond from './assets/bond_approve.jpg'


class Form extends Component{
    state = {
        initData : [
            {
                name : "firstname",
                labelText : "Имя",
                inputClass : "field__input field-input t-input-firstname",
                type : "text",
                textValue : "",
                errorClass : "field__error field-error t-error-firstname",
                errorText : ""
            },
            {
                name : "lastname",
                labelText : "Фамилия",
                inputClass : "field__input field-input t-input-lastname",
                type : "text",
                textValue : "",
                errorClass : "field__error field-error t-error-lastname",
                errorText : ""
            },
            {
                name : "password",
                labelText : "Пароль",
                inputClass : "field__input field-input t-input-password",
                type : "password",
                textValue : "",
                errorClass : "field__error field-error t-error-password",
                errorText : ""
            },
        ],
        showForm : true
    }

    updateData = (value, key) => {
        this.setState((state) => {
            return {initData : state.initData.map((data) => {
                if (key === data.name){
                    return {...data, textValue : value, errorText : ""}
                }
                else return {...data,errorText : ""}
            })
            }
          });
    }


    validateForm = (e) => {
        e.preventDefault();
        var countError = false; 
        this.setState((state) => {
            return { initData: state.initData.map((data) => {
                var textError = "";
                if(data.textValue === ""){
                    textError = data.name === "lastname" ? "Нужно указать фамилию": 
                                            "Нужно указать " + data.labelText.toLowerCase();
                    countError = true;
                }else{
                    if(data.name === "firstname" && data.textValue.toLowerCase() !== "james"){
                        textError = "Имя указано не верно";
                        countError = true;
                    }
                    if(data.name === "lastname" && data.textValue.toLowerCase() !== "bond"){
                        textError = "Фамилия указана не верно";
                        countError = true;
                    }
                    if(data.name === "password" && data.textValue !== "007"){
                        textError = "Пароль указан не верно";
                        countError = true;
                    }
                }
                return {...data, errorText : textError}
            }),
            showForm : countError
            }
          });
    };

    render(){
        return(
            <div className="app-container">
            { this.state.showForm
                ?
                <form className="form" onSubmit = {this.validateForm}>
                    <h1>Введите свои данные, агент</h1>
                    {this.state.initData.map((data) => {
                        return <Field 
                                data={data} 
                                key={data.name} 
                                updateData={this.updateData}
                                />
                    })}
                    <div className="form__buttons">
                        <input 
                            type="submit" 
                            className="button t-submit"                             
                            value="Проверить"
                        />
                    </div>
                </form>
                :
                <div>
                    <img
                        src = {imgBond}
                        alt = "bond approve"
                        className = "t-bond-image"
                    />
                </div>
            }
            </div>
        );
    }
}


export default Form;

