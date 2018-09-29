import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <div className="message">
        {this.props.text}
      </div>
    )
  }
}

export default Message;
