import React from 'react';
import './Message.css';

function Message({ text }) {
  return <span className="message">{text}</span>;
}

export default Message;
