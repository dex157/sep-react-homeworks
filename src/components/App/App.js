import React, { PureComponent } from 'react';
import './App.css';
import Todo from '../Todo';
import { load, save } from '../../localstorage';

class App extends PureComponent {
  render() {
    return (
      <main className="main">
        <div className="main__cell">
          <Todo className='todo-item' saveData={save} savedData={load('todo-item')}/>
        </div>
      </main>
    );
  }
}

export default App;
