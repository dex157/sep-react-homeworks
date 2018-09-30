import React, {Component} from 'react';
import Message from '../Message';
import './Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  }

  changeInputMessage = evt => {
    const val = evt.target.value;

    this.setState({
      messageInput: val
    });
  }

  sendMessageOnEnter = evt => {
    const {messages, messageInput} = this.state;

    if (evt.key === 'Enter' && messageInput) {
      messages.push({text: messageInput});
      this.setState({
        messages: messages,
        messageInput: ''
      });
    }
  }

  render () {
    const {messages, messageInput} = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, i) => {
              return <Message text={message.text} key={i} />;
            })}
          </div>
        </div>
        <input className="input-message"
               type="text"
               onChange={this.changeInputMessage}
               onKeyPress={this.sendMessageOnEnter}
               value={messageInput}
        />
      </div> 
    )
  }
};