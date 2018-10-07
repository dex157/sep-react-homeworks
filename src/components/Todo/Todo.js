import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: '',
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
     this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
  const { savedData, saveData } = this.props;
  const id = Number(event.target.parentNode.id);
  const arr = [...savedData];
  const el = arr.find(el => el.id === id);
  let isComplete = el.complete;
  el.complete = !isComplete;
  saveData(arr);
  };

  createNewRecord = () => {
  const { saveData, savedData } = this.props;
  const { inputValue } = this.state;
  const array = [...savedData];
  const elem = {
    id: this.getId(),
    text: inputValue,
    complete: false,
  }
  array.push(elem);
  saveData(array); 
  this.setState({
    inputValue: '',
  });
  };

  render() {
    const { inputValue } = this.state;
    const { savedData } = this.props;
    return (
      <Card>
        <div className="todo t-todo-list">
          {this.renderEmptyRecord(inputValue)}
          {savedData.map(el => this.renderRecord(el))}          
        </div>
      </Card>
    );
  }

  renderEmptyRecord = (inputValue) => (
    <div className="todo-item todo-item-new">
      <input className="todo-input t-input" placeholder="Введите задачу" onChange={this.handleChange} onKeyPress={this.createNewRecordByEnter} value={inputValue} />
      <span className="plus t-plus" onClick={this.createNewRecord}>+</span>
  </div>
  );

  renderRecord = record => (
    <div key={record.id} className="todo-item t-todo" id={record.id}>
      <p className="todo-item__text">{record.text}</p>
      <span className="todo-item__flag t-todo-complete-flag" onClick={this.toggleRecordComplete}>{record.complete ? '[x]' : '[ ]'}</span>
    </div> 
  );
};

export default withLocalstorage('todo-app', [])(Todo);
