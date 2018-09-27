import React from 'react';
import Messages from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messageInput: "",
    messages: [],
  }

  changeInputMessage = (event) => {
    this.setState({
      messageInput: event.target.value,
    });
  }
  sendMessageOnEnter = (event) => {
    if (event.key === 'Enter') {
      const messages = [...this.state.messages]; 
      messages.push({text: this.state.messageInput});
      this.setState({
        messages,
        messageInput: "",
      });
    }
  }
  
  render() {
    return (      
        <div className="chat">
          <div className="message-list">      
            <div className="messages">
              {this.state.messages.map(el => (
                <Messages key={el.text} text={el.text}/>                 
              ))}
            </div>                       
          </div>
          <input 
            className="input-message" 
            onKeyPress={this.sendMessageOnEnter} 
            onChange={this.changeInputMessage} 
            value={this.state.messageInput} 
          />
        </div>     
    )
  }
}


export default Chat;