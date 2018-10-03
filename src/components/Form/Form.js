import React, { Component } from 'react';
import image from './assets/bond_approve.jpg';
import './From.css';

class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    errors: {},
    isValid: false
  };

  render() {
    const { errors, isValid } = this.state;
    if (!isValid) {
      return '...';
    } else {
      return '...';
    }
  }
}

export default Form;
