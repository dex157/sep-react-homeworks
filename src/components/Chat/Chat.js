import React, {Component} from 'react';
import Message from 'components/Message';
import './Chat.css';
class Chat extends Component {
  state = {
    messageInput: '',
    messages: []
  }

  changeInputMessage = (e) => {
    let value = e.target.value;
    this.setState({messageInput: value});
  }

  sendMessageOnEnter = (e) => {
    if (e.key !== 'Enter') return false;
    let {messageInput, messages} = this.state;
    messages.push({text: messageInput});
    this.setState({messageInput: '', messages: messages});
  }

  render () {
    let {messageInput, messages} = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, i) => <Message text={message.text} key={i}/>)}
          </div>
        </div>
        <input className="input-message" type="text" onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} value={messageInput}/>
      </div>
    )
  }

}

export default Chat;

