import React, { Component } from 'react';
import './Chat.css';
import Message from '../Message/Message';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      const { messages, messageInput } = this.state;

      if (!messageInput) {
        return;
      }

      this.setState({
        messages: [
          ...messages,
          {
            text: messageInput
          }
        ],
        messageInput: ''
      });
    }
  };

  changeInputMessage = e => {
    this.setState({
      messageInput: e.target.value
    });
  };

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((e, i) => {
              return <Message key={i} text={e.text} />;
            })}
          </div>
        </div>

        <input
          type="text"
          value={messageInput}
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
