import React from 'react';


const Message = (props) => {
    return (
            <span className="message">
                {props.text}
            </span>
    )
}

export default Message