import React from 'react';
import Message from '../Message/Message';
import './Chat.css';
import uuidv4 from 'uuid/v4';

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };
  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };
  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      this.setState({
        messages: [{ text: this.state.messageInput }, ...this.state.messages],
        messageInput: ''
      });
    }
  };
  render() {
    const { messages } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map(message => (
              <Message key={uuidv4()} text={message.text} />
            ))}
          </div>
        </div>

        <input
          type="text"
          value={this.state.messageInput}
          onKeyPress={this.sendMessageOnEnter}
          onChange={this.changeInputMessage}
          className="input-message"
        />
      </div>
    );
  }
}

export default Chat;
