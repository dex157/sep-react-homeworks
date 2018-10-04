import React, {Component} from 'react';
import './Message.css';

export default class Message extends Component {
  render() {
    let {text} = this.props;
    return (
      <span className="message">{text}</span>
    );
  }    
}