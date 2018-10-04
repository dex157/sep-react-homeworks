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
      this.createNewRecord(inputValue);
    }
  };

  toggleRecordComplete = event => {};

  createNewRecord = inputValue => {
    let { saveData, savedData } = this.props;
    if (inputValue) {
      var newRecord = { id: this.getId(), text: inputValue, isComplete: false };
      var data = [...savedData, newRecord];

      saveData('todo-item', data);
      
    }
  };

  render() {
    const data = this.props.savedData;
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
        <span
          className="plus t-plus"
          onClick={this.createNewRecord(inputValue)}
        >
          +
        </span>
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
        >
          {record.isComplete ? '[ x ]' : '[ ]'}
        </span>
      </div>
    );
  };
}

export default Todo;
