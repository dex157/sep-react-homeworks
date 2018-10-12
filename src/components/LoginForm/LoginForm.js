import React, { Component } from 'react';
import './LoginForm.module.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="bg">
        <div className="form t-form">
          <p>
            <label htmlFor="email" />
            <input type="text" name="email" className="input t-input" />
          </p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
