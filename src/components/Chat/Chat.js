import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const { messageInput, messages } = this.state;
      this.setState({
        messageInput: '',
        messages: [...messages, { text: messageInput }]
      });
    }
  };

  render() {
    const { messageInput, messages } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, i) => (
              <Message text={message.text} key={i} />
            ))}
          </div>
        </div>
        <input
          type="text"
          className="input-message"
          onKeyPress={this.sendMessageOnEnter}
          onChange={this.changeInputMessage}
          value={messageInput}
        />
      </div>
    );
  }
}

export default Chat;
