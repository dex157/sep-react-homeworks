import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';
import { uniqueId } from 'lodash';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };
  componentDidUpdate() {
    this.scrollToBottom();
  }
  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };
  sendMessageOnEnter = e => {
    if (e.key === 'Enter') {
      const { messages, messageInput } = this.state;
      if (!this.validate(messageInput)) {
        return;
      }
      this.setState({
        messages: [{ text: messageInput }, ...messages],
        messageInput: ''
      });
    }
  };
  validate = text => !!text;

  scrollToBottom() {
    if (this.el) {
      this.el.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }
  renderMessages = () => {
    const { messages } = this.state;
    return messages.map(message => (
      <Message key={uniqueId()} text={message.text} />
    ));
  };
  render() {
    const { messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div
            className="messages"
            ref={el => {
              this.el = el;
            }}
          >
            {this.renderMessages()}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          value={messageInput}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}
export default Chat;
