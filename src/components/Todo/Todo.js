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
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    if (event.keyCode === 13) this.createNewRecord();
  };

  toggleRecordComplete = event => {
    const { saveData, savedData } = this.props;
    const todoId = parseInt(event.target.dataset.todoId, 10);
    const data = savedData.map(item => {
      return item.id === todoId
        ? Object.assign(item, { isComplete: !item.isComplete })
        : item;
    });

    saveData(data);
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
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

    this.setState({ inputValue: '' });
  };

  render() {
    const { savedData } = this.props;

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {savedData.map(this.renderRecord)}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    const { inputValue } = this.state;

    return (
      <div className="todo-item todo-item-new">
        <input
          className="todo-input t-input"
          value={inputValue}
          placeholder="Введите задачу"
          onChange={this.handleChange}
          onKeyPress={this.createNewRecordByEnter}
        />
        <span className="plus t-plus"
          onClick={this.createNewRecord}
          children='+' 
        />
      </div>
    );
  }

  renderRecord = record => {
    return (
      <div className="todo-item t-todo" key={record.id}>
        <p className="todo-item__text">{record.text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={record.id}
          onClick={this.toggleRecordComplete}
          children={record.isComplete ? '[x]' : '[ ]'}
        />
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
