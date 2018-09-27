import React, {Component} from "react";
import './Message.css';

class Message extends Component {
    render() {
        let {text} = this.props || [];

        return (
        <div className="messages">
            {text.map((props, i) => (
                <span className="message" key={i}>{props.text}</span>   
            ))}
        </div>
        );
    }
}

export default Message;