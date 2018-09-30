import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  render() {
    const messageElements = this.state.messages.map(message => (
      <Message text={message.text} />
    ));

    return (
      <div className="chat">
        {messageElements}
        <input
          className="input-message"
          onKeyPress={this.sendMessageOnEnter}
          onChange={this.changeInputMessage}
          value={this.state.messageInput}
        />
      </div>
    );
  }

  changeInputMessage = e => {
    this.setState({
      messageInput: e.target.value
    });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      this.setState({
        messages: [...this.state.messages, { text: this.state.messageInput }],
        messageInput: ''
      });
    }
  };
}

export default Chat;