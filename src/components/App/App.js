import React, { PureComponent } from 'react';
import './App.css';
import Todo from '../Todo';

class App extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.todoForwardRef = React.createRef();
  // }

  // checkForwardRef = () => {
  //   console.log(this.todoForwardRef);
  // };

  render() {
    return (
      <main className="main" onClick={this.checkForwardRef}>
        <div className="main__cell">
          <Todo />
          {/*<Todo ref={this.todoForwardRef} test2="t-hoc-props" />*/}
        </div>
      </main>
    );
  }
}

export default App;
