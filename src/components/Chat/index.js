import React, { Component } from 'react';
import './Chat.css';
import Message from '../Message';

class Chat extends Component {
  state = {
    messageInput: '',
    messages: []
  }

  changeInputMessage = (e) => {
    e.preventDefault()
    this.setState({ messageInput: e.target.value });
  }

  sendMessageOnEnter = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        messages: this.state.messages.concat([{ text: this.state.messageInput }]),
        messageInput: ''
      });
    }
  }

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((item, index) => <Message text={item.text} key={index}/>)}
          </div>
        </div>
        <input
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          className="input-message"
        />
      </div>
    )
  }
}

export default Chat;