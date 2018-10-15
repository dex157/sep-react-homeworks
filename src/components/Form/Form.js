import React from 'react'
import bond from './assets/bond_approve.jpg';
import './Form.css';
 const JamesData = {
  firstName: {
    value:'james', error: 'Имя указано не верно', errorEmpty: 'Нужно указать имя'
  }, 
  lastName: {
    value:'bond', error: 'Фамилия указана не верно', errorEmpty: 'Нужно указать фамилию'
  }, 
  password: {
    value:'007', error: 'Пароль указан не верно', errorEmpty: 'Нужно указать пароль'
  }, 
};
 class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    errors: {},
    isValidate: false,
  }
   changeInputText = (e) => {
    if (this.state.errors[e.target.name]) {      
      this.setState({
        [e.target.name]: e.target.value,
        errors: {},
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }
   formValidationSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(JamesData).forEach(key => {
      if (this.state[key] === '') {
        errors[key] = JamesData[key].errorEmpty;
      } else if (JamesData[key].value !== this.state[key].toLowerCase()) {
        errors[key] = JamesData[key].error;
      }
    }) 
    this.setState({errors, isValidate: Object.keys(errors).length === 0});
  }
   render(){
    const { firstName, lastName, password, errors, isValidate } = this.state;
    if (!isValidate){
      return (
        <div className="app-container">
          <form className="message-list" onSubmit={this.formValidationSubmit}  > 
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstName">
                <span className="field-label">Имя</span>
              </label>
              <input className="field__input field-input t-input-firstname" onChange={this.changeInputText}  type="text" name="firstName" value={firstName}></input>
              <span className="field__error field-error t-error-firstname">{errors.firstName}</span>
            </p>     
            <p className="field">
              <label className="field__label" htmlFor="lastName">
                <span className="field-label">Фамилия</span>
              </label>
              <input className="field__input field-input t-input-lastname" onChange={this.changeInputText} type="text" name="lastName" value={lastName}></input>
              <span className="field__error field-error t-error-lastname">{errors.lastName}</span>
            </p>     
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input className="field__input field-input t-input-password" onChange={this.changeInputText} type="text" name="password" value={password}></input>
              <span className="field__error field-error t-error-password">{errors.password}</span>
            </p>     
              
            <div className="form__buttons">
              <input 
              type="submit"
              className="button t-submit"                        
              value="Проверить" 
              />   
            </div>                    
          </form>        
        </div>     
      )
    }  else {
      return (
        <div className="app-container">
         <img src={bond} alt="bond approve" className="t-bond-image" />
        </div>       
      )
    }   
  }
}
 export default Form;