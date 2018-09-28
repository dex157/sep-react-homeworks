import React, {Component} from "react";
import './Message.css';

class Message extends Component {
    render() {
        let {prop} = this.props;

        return (
            <span className="message">{prop.text}</span>
        );
    }
}

export default Message;