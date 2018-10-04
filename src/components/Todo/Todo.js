import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { saveData, savedData } = this.props;
    const index = parseInt(event.target.dataset.todoId, 10);

    let changeData = [];
    savedData.map(data => {
      if (index === data.id) {
        changeData.push({
          id: data.id, 
          isDone: !data.isDone, 
          value: data.value
        });
      } else {
        changeData.push(data);
      }
    })
    saveData(changeData);
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    const { saveData, savedData } = this.props;

    if (inputValue !== '') {    
      saveData([
        {
          id: this.getId(),
          isDone: false, 
          value: inputValue
        },
        ...savedData
      ]);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return ( <Card children={this.renderEmptyRecord()} title={'Список дел'} /> )
  }

  renderEmptyRecord() {
    const { inputValue } = this.state;
    const { savedData } = this.props;

    return (
      <div className="todo t-todo-list">
        <div className="todo-item todo-item-new">
          <input className="todo-input t-input" 
            placeholder="Введите задачу" 
            value={inputValue} 
            onChange={this.handleChange}
            onKeyPress={this.createNewRecordByEnter}/>
            <span 
              className="plus t-plus" 
              onClick={this.createNewRecord}>
              +
            </span>
        </div>
        {this.renderRecord(savedData)}
      </div>
    )
  }

  renderRecord = record => {
    return (
      record.map((task, key) => (
        <div key={key} className="todo-item t-todo">
          <p className="todo-item__text">
            {task.value}
          </p>
          <span 
            className="todo-item__flag t-todo-complete-flag" 
            data-todo-id={task.id}
            onClick={this.toggleRecordComplete}>
            {task.isDone ? '[x]' : '[]'}
          </span>
        </div>
      ))
    )
  };
}

export default withLocalstorage('todo-app', [])(Todo);
