import React from 'react';
import './Message.css';

const Message = props => {
  return <span className="message">{props.text}</span>;
};

export default Message;
