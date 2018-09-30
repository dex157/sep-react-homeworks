import React, { Component } from 'react';
import './Chat.css';

import Message from '../Message';

export default class Chat extends Component {
  state = {
    messageInput: '',
    messages: []
  };

  changeInputMessage = event => {
    this.setState({
      messageInput: event.target.value
    });
  };

  sendMessageOnEnter = event => {
    const { messages, messageInput } = this.state;

    if (event.key === 'Enter' && messageInput) {
      this.setState({
        messages: [...messages, { text: messageInput }],
        messageInput: ''
      });
    }
  };

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, index) => (
              <Message key={index} text={message.text} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          onKeyPress={this.sendMessageOnEnter}
          onChange={this.changeInputMessage}
          value={messageInput}
        />
      </div>
    );
  }
}
