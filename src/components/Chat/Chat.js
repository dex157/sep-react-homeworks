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
    const { messages, messageInput } = this.state;

    if ((e.key === 'Enter') && (messageInput)) {
      messages.push( { text: messageInput } );

      this.setState( { messages: messages } );
      this.setState( { messageInput: ''} );
    }
  };

  render() {
    const {messages, messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, keyId) => {
              return <Message key={keyId} text={message.text} />
            })}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={messageInput}
        />
      </div>
    );
  }
}
export default Chat;