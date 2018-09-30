import React, { Component } from 'react';
import Message from '../Message';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: ''
    };
  }

  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    if (e.keyCode === 13) {
      this.setState({
        messages: [...this.state.messages, {'text': this.state.messageInput}]
      });
      this.setState({ messageInput: "" });
    }
  };

  render() {
    return (
      <div className="chat" onKeyDown={this.sendMessageOnEnter}>
        {this.state.messages.map((el, key) => (
          <Message key={key} text={el} />
          
        ))}

        <input
          onChange={this.changeInputMessage}
          className="input-message"
          value={this.state.messageInput}
        />
      </div>
    );
  }
}
