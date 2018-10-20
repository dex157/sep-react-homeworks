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
    event.preventDefault();

    this.setState ({inputValue: event.target.value});
 
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { todoId } = event.target.dataset;
    const { savedData, saveData } = this.props;
    savedData[todoId - 1] = {
      ...savedData[todoId - 1],
      isComplete: !savedData[todoId - 1].isComplete
    };
    saveData(savedData);
  };

  createNewRecord = () => {
    const { saveData, savedData } = this.props;
    const { inputValue } = this.state;

    const newItemId = this.getId();
    if (inputValue !== '') {
      saveData([
        ...savedData,
        {
          id: newItemId,
          isComplete: false,
          text: inputValue
        }
      ]);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    const { inputValue } =  this.state;
    const { savedData } = this.props;

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
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
          {savedData.map(value => this.renderRecord(value))}
        </div>
      </Card>
    );
  }

  renderRecord = record => {
    const { id, isComplete, text } = record;
    return (
      <div key={id} className="todo-item t-todo">
        <p className="todo-item__text">{text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={id}
          onClick={this.toggleRecordComplete}
        >
          {isComplete ? '[x]' : '[ ]'}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
