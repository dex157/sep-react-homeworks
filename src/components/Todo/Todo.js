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
    const { inputValue } = this.state;

    if (event.key === 'Enter' && inputValue) {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    let { saveData, savedData } = this.props;
    const id = parseInt(event.target.dataset.todoId, 10);

    savedData = savedData.map(
      record =>
        record.id === id
          ? { ...record, isComplete: !record.isComplete }
          : record
    );
    saveData(savedData);
  };

  toggleRecordRemove = event => {
    let { saveData, savedData } = this.props;
    const id = parseInt(event.target.dataset.todoId, 10);
    savedData = savedData.filter(record => record.id !== id);
    saveData(savedData);
  };

  createNewRecord = () => {
    let { saveData, savedData } = this.props;
    const { inputValue } = this.state;

    if (inputValue) {
      var newRecord = { id: this.getId(), text: inputValue, isComplete: false };
      var data = [...savedData, newRecord];

      this.setState({ inputValue: '' });
      saveData(data);
    }
  };

  render() {
    const { savedData: data } = this.props;
    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {data
            ? data.map(record => {
                return this.renderRecord(record);
              })
            : null}
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
          placeholder="Введите задачу"
          value={inputValue}
          onChange={this.handleChange}
          onKeyPress={this.createNewRecordByEnter}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>
          +
        </span>
      </div>
    );
  }

  renderRecord = record => {
    const { id, text, isComplete } = record;
    return (
      <div className="todo-item t-todo" key={id}>
        <span
          className="todo-item__minus t-todo-minus"
          data-todo-id={id}
          onClick={this.toggleRecordRemove}
        >
          [-]
        </span>
        <p className="todo-item__text">{text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={id}
          onClick={this.toggleRecordComplete}
        >
          {isComplete ? '[ x ]' : '[ ]'}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
