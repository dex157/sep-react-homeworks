import React from 'react';
import './Message.css';

class Message extends React.Component {
  render() {
    return (
      // <div className='message-component'>
      //   <ul>{this.props.messages.map((item, i) => <li key={i}>{item}</li>)}</ul>
      // </div>
      <span className="message">{this.props.text}</span>
    );
  }
}

export default Message;
