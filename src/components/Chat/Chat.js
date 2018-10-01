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
    const { messageInput, messages } = this.state;

    if (e.key === 'Enter' && messageInput) {
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
