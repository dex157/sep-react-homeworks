import React, {Component} from 'react';
import './LoginForm.module.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
        onChange = event => {
        //let field = event.target.name;
        console.log(event.target.name);
        this.setState({
          
        });
    }

    render() {
        const { email, password } = this.state;

        return (
          <form className="form">
              <div className="LoginForm">
                <div className="LoginForm_form">
                    <p>
                        <label htmlFor="email">
                            <span className="LoginForm_labelText">Почта</span>                            
                        </label>
                        <input 
                            type="text" 
                            name="email" 
                            className="LoginForm_input t-input-email" 
                            value={email} 
                            onChange={this.onChange} 
                        />
                    </p>
                    <p>
                    <label htmlFor="password">
                        <span className="LoginForm_labelText">Почта</span>                            
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        className="LoginForm_input t-input-pawssword" 
                        value={ password } 
                        onChange={this.onChange}                         
                    />
                </p>
                </div>
                <div className="LoginForm_buttons">
                    <button className="LoginForm_button t-login">Войти</button>
                </div>
              </div>
 
              <div className="LoginForm__buttons">
                  <button className="button t-submit" onClick={(e) => this.onSubmit(e)}>Проверить</button>
              </div>
          </form>
        )
    }      
}

export default LoginForm;