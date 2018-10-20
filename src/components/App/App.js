import React, { PureComponent } from 'react';
import './App.css';
import Todo from '../Todo';

class App extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.todoForwardRef = React.createRef();
  // }

  // checkForwardRef = () => {
  //   console.log(this.todoForwardRef); onClick={this.checkForwardRef}
  // };

  render() {
    // <Todo ref={this.todoForwardRef} test2="t-hoc-props" />

    return (
      <main className="main">
        <div className="main__cell">
          <Todo />
        </div>
      </main>
    );
  }
}

export default App;
