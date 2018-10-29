import React, {Component} from 'react';
import './Form.css';
import bondImg from './assets/bond_approve.jpg';

class FirstNameField extends Component {
  state = {valueFirst: '', statusFirst: 'empty'}; 
  onChangeFirst = (e) => { 
    var val = e.target.value;
    this.setState({valueFirst: val});
    if (val === "James") {
      this.setState({statusFirst: "correct"});
    } else {
      if (val !== "") {
        this.setState({statusFirst: "wrong"});
      } else {
        this.setState({statusFirst: "empty"});
      }
    }   
  }  
  render() {
    return (
     <p className = "field" >
        <label className = "field__label" htmlFor='firstname'>
           <span className = "field-label">Имя</span>
         </label>
              <input  
                className='field__input field-input t-input-firstname'
                type='text'
                name='firstname'
                value={this.state.valueFirst}
                onChange={this.onChangeFirst}></input> 
      </p>
    )
  }   
}

class LastNameField extends Component {
  state = {valueLast: '', statusLast: 'empty'};   
  onChangeLast = (e) => {
    var val = e.target.value;
    this.setState({valueLast: val});
    if (val === "Bond") {
      this.setState({statusLast: "correct"});
    } else {
      if (val !== "") {
        this.setState({statusLast: "wrong"});
      } else {
        this.setState({statusLast: "empty"});
      }
    }   
  }  
  render() {
    return (
      <span className = "field" >
        <label className = "field__label" htmlFor='lastname'>
           <span className = "field-label">Фамилия</span>
         </label>
              <input  
                className='field__input field-input t-input-lastname'
                type='text'
                name='lastname'
                value={this.state.valueLast}
                onChange={this.onChangeLast}></input> 
      </span>
    )
  }     
}

class PasswordField extends Component {
  state = {valuePassword: '', statusPassword: 'empty'};   
  onChangePassword = (e) => {
    var val = e.target.value;
    this.setState({valuePassword: val});
    if (val === "007") {
      this.setState({statusPassword: "correct"});
    } else {
      if (val !== "") {
        this.setState({statusPassword: "wrong"});
      } else {
        this.setState({statusPassword: "empty"});
      }
    }   
  }  
  render() {
    return (
      <span className = "field" >
        <label className = "field__label" htmlFor='password'>
           <span className = "field-label">Пароль</span>
         </label>
              <input  
                className='field__input field-input t-input-password'
                type='password'
                name='password'
                value={this.state.valuePassword}
                onChange={this.onChangePassword}></input> 
      </span> 
    )
  }   
}


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {displayErr: "none", bondik: false}; 
    this.firstStatus = {empty: 'Нужно указать имя', wrong: 'Имя указано неверно', correct: ''};
    this.lastStatus = {empty: 'Нужно указать фамилию', wrong: 'Фамилия указана неверно', correct: ''};
    this.passwordStatus = {empty: 'Нужно указать пароль', wrong: 'Пароль указан неверно', correct: ''}; 
    this.status = {};
  }
  onChangeForm = (e) => {
    this.setState({displayErr: "none"});
  }
  handleSubmit = (e) => {
    e.preventDefault(); 
    this.setState({displayErr: "disp"});
    if (this.firstNameField.state.statusFirst === "correct" && this.lastNameField.state.statusLast === "correct" && this.passwordField.state.statusPassword === "correct") {
      this.setState({bondik: true});
    } else {
      this.setState({bondik: false});     
    }
    this.status = {
      firstStat: this.firstNameField.state.statusFirst,
      lastStat: this.lastNameField.state.statusLast,
      passwordStat: this.passwordField.state.statusPassword
    };
  }   
  render() {    
    let {firstStat, lastStat, passwordStat} = this.status; 
    return (
       (this.state.bondik === false) ? (
         <div className="app-container">   
           <form onChange={this.onChangeForm} onSubmit={this.handleSubmit}>
             <h1>Введите свои данные, агент</h1>      
             <FirstNameField  ref={component => (this.firstNameField = component)}/>
             <span className = "field__error field-error t-error-firstname" >{this.state.displayErr === 'none' ? '':this.firstStatus[firstStat]}</span>              
             <LastNameField  ref={component => (this.lastNameField = component)} />
             <span className = "field__error field-error t-error-lastname" >{this.state.displayErr === 'none' ? '':this.lastStatus[lastStat]}</span>                
             <PasswordField  ref={component => (this.passwordField = component)} />
             <span className = "field__error field-error t-error-password" >{this.state.displayErr === 'none' ? '':this.passwordStatus[passwordStat]}</span>                
            
             <div className = "form__buttons">
               <input
                 className = "button t-submit"
                 type = "submit"
                 value = "Проверить"
               />
             </div>
           </form>        
         </div>
       ) : (
         <div className="app-container">
           <img src={bondImg} alt="bond approve" className="t-bond-image"></img>
         </div>   
       )       
    )
  }
}
