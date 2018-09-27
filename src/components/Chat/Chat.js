import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    const { messageInput, messages } = this.state;
    if (event.key === 'Enter') {
      messages.push({ text: messageInput });
      this.setState({ messages: messages });
      this.setState({ messageInput: '' });
    }
  };

  scrollToBottom = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    const { messages, messageInput } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div ref="messages" className="messages">
            {messages.map((message, key) => (
              <Message key={key} text={message.text} />
            ))}
            <div
              ref={el => {
                this.messagesEnd = el;
              }}
            />
          </div>
        </div>
        <input
          className="input-message"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
