import React, {Component} from 'react';
import './Form.css';
import bondImg from './assets/bond_approve.jpg';


class FirstNameField extends Component {
  
  state = {valueFirst: '', statusFirst: ''}; 

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
        <label className = "field__label" >Имя </label>
        <input className = "field__input t-input-firstname" type="text" value={this.state.valueFirst} onChange={this.onChangeFirst} />
      </p>
    )
  }   

}


class LastNameField extends Component {

  state = {valueLast: '', statusLast: ''}; 
    
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
      <p className = "field" >
        <label className = "field__label" >Фамилия </label>
        <input className = "field__input t-input-lastname" type="text" value={this.state.valueLast} onChange={this.onChangeLast} />
      </p>
    )
  }     

}


class PasswordField extends Component {

  state = {valuePassword: '', statusPassword: ''}; 
    
  onChangeLast = (e) => {
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
      <p className = "field">
        <label  className = "field__label" >Пароль </label>
        <input className = "field__input t-input-password" type="password" value={this.state.valuePassword} onChange={this.onChangePassword} />
      </p>
    )
  }   

}


export default class Form extends Component {

  state = {display: "", bondik: false};

  
  onChangeForm = (e) => {
    this.setState({display: "none"});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({display: "block"});
    if (this.refs.firstNameField.state.statusFirst === "correct" && this.refs.lastNameField.state.statusLast === "correct" && this.refs.passwordField.state.statusPassword === "correct") {
      this.setState({bondik: true});
    } else {
      this.setState({bondik: false});     
    }
  }   
  
  render() {
    var  firstStatus = {empty: 'Нужно указать имя', wrong: 'Имя указано неверно', correct: ''};
    var  lastStatus = {empty: 'Нужно указать фамилию', wrong: 'Фамилия указано неверно', correct: ''};
    var  passwordStatus = {empty: 'Нужно указать пароль', wrong: 'Пароль указан неверно', correct: ''};
    let status = {
      display: this.state.display,
      firstStat: this.refs.firstNameField.state.statusFirst,
      lastStat: this.refs.lastNameField.state.statusLast,
      passwordStat: this.refs.passwordField.state.statusPassword
    }; 
    let {display, firstStat, lastStat, passwordStat} =  status;

    return (
       (this.state.bondik === false) ? (
         <div className="app-container">
           <form onChange={this.onChangeForm} onSubmit={this.handleSubmit}>
             <FirstNameField  ref="firstNameField" />
             <p className = "field__error t-error-firstname" style={{display: display}}>{firstStatus[firstStat]}</p>                
             <LastNameField  ref="lastNameField" />
             <p className = "field__error t-error-lastname" style={{display: display}}>{lastStatus[lastStat]}</p>                
             <PasswordField  ref="passwordField" />
             <p className = "field__error t-error-password" style={{display: display}}>{passwordStatus[passwordStat]}</p>                
             <div className="form__buttons">
               <input className="button t-submit" type="submit" value="Проверить" />
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
