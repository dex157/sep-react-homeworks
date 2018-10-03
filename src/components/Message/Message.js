import React, { Component } from 'react';
// import Chat from 'components/Chat';
import './Message.css';

class Message extends Component {
    render() {
        const { text } = this.props;
        // const { text, customProp } = this.props;
        // console.log(customProp);
        return (
            <span className="message">
                <p>{text}</p>
                {/* <Chat>
                    children = { state.messages };
                    {state.messages.map(el =>(
                        <p>{state.messages[el]}</p>
                    ))}
                </Chat> */}

            </span>
        );
    }
}

// class RenderMessage extends Component {
//     render() {
//         const { children } = this.props;
//         return <div> {children} </div>

//     }
// }

export default Message;

// import React from 'react';
// import './Message.css';
// class Message extends React.Component {
//     render() {
//         return (
//             <span className= "message">
//                 {this.props.text}
//             </span>
//         )
//     }
// }
// export default Message;