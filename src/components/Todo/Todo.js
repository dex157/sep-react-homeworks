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
    this.setState({inputValue: event.target.value})
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    const id = parseInt(event.target.dataset.todoId, 10);

    saveData(
      savedData.map(
        record =>
          record.id === id
            ? { ...record, isComplete: !record.isComplete }
            : record
      )
    );
  };

  createNewRecord = () => {
    const {inputValue} = this.state;
    const { saveData, savedData } = this.props;

    if (inputValue) {
      saveData([
        {
          id: this.getId(),
          isComplete: false,
          text: inputValue
        }, 
        ...savedData
      ]);
    }

    this.setState({inputValue: ''})
  };

  render() {
    const { savedData } = this.props;

    return (
      <Card title = "Список дел">
        <div className = "todo t-todo-list">
          {this.renderEmptyRecord()}
          {savedData.map(this.renderRecord)}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    const {inputValue} = this.state;

    return (
      <div className = "todo-item todo-item-new">
        <input 
          className = "todo-input t-input"
          placeholder = "Введите задачу"
          value = {inputValue}
          onChange = {this.handleChange}
          onKeyPress = {this.createNewRecordByEnter}
        />
        <span 
          className = "plus t-plus"
          onClick = {this.createNewRecord} 
        >
        +
        </span>
      </div>
    );
  }

  renderRecord = record => {
    return (
      <div className = "todo-item t-todo" key = {record.id}>
        <p className = "todo-item__text">{record.text}</p>
        <span
          className =  "todo-item__flag t-todo-complete-flag"
          data-todo-id = {record.id}
          onClick = {this.toggleRecordComplete}
        >
        {record.isComplete ? '[x]' : '[ ]'}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
