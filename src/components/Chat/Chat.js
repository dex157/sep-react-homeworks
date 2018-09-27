import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      const { messageInput } = this.state;
      if (messageInput) {
        this.setState({
          messages: [...this.state.messages, { text: messageInput }]
        });
        this.setState({ messageInput: '' });
      }
      return false;
    }
  };

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, i) => (
              <Message key={i} text={message.text} />
            ))}
          </div>
        </div>
        <input
          type="text"
          className="input-message"
          onKeyPress={this.sendMessageOnEnter}
          onChange={this.changeInputMessage}
          value={this.state.messageInput}
        />
      </div>
    );
  }
}

export default Chat;
