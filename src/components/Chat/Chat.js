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
    if (e.key === 'Enter') {
      this.setState({
        messages: [...this.state.messages, { text: this.state.messageInput }]
      });
      this.setState({ messageInput: '' });
    }
  };

  render() {
    return (
      <div className="chat">
        {this.state.messages.map((el, key) => (
          <Message key={key} text={el.text} />
        ))}

        <input
          onChange={this.changeInputMessage}
          className="input-message"
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
      </div>
    );
  }
}