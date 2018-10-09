import React from 'react';
import './Message.css';

export default function Message(props) {
    return <span className="message">{props.text}</span>
}