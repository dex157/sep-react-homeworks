import React, { Component } from 'react';
import './Chat.css';


class Chat extends Component {
  state = {
    count: 0,
  };

  handleClick = (event) => {
    const { count } = this.state;

    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;
    const { prop1 } = this.state;
    const list = [
      {
        id: 1,
        name: "white"
      },
      {
        id: 2,
        name: "green"
      },
      {
        id: 3,
        name: "blue"
      },
      {
        id: 4,
        name: "black"
      }
    ]

    return (

        <div>
          <button onClick={this.handleClick}>+</button>
          <RedColor>
            <p>counter: {count}</p>
            <p>{`prop: ${prop1}`}</p>

              <pre>counter: {count}</pre>
              <div>
                {list.map((el, i) => (
                  <p key={i}>{i}  {el.name}</p>
                ))}
              </div>
          </RedColor>  
        </div>

    );
  }
}

class RedColor extends Component {
  render() {
      const { children } = this.props;
      return <div style= {{ color:'red' }}> {children} </div>;
  }
}

export default Chat;
