import React, { PureComponent } from 'react';
import './App.css';
import Todo from '../Todo';

class App extends PureComponent {
  render() {
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
