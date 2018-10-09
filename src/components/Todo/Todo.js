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
    const value = event.target.value;

    this.setState({
      inputValue: value
    });
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') this.createNewRecord();
  };

  toggleRecordComplete = event => {
    const value = +event.target.getAttribute('data-todo-id'),
      { savedData, saveData } = this.props,
      newDate = savedData.map(
        data =>
          data.id === value ? { ...data, isComplete: !data.isComplete } : data
      );

    saveData(newDate);
  };

  createNewRecord = () => {
    const { inputValue } = this.state,
      { saveData, savedData } = this.props;

    if (inputValue !== '') {
      saveData([
        {
          id: this.getId(),
          isComplete: false,
          text: inputValue
        },
        ...savedData
      ]);
      this.setState({
        inputValue: ''
      });
    }
  };

  render() {
    const { savedData } = this.props;

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {savedData.map(task => (
            <div key={task.id} className="todo-item t-todo">
              <p className="todo-item__text">{task.text}</p>
              <span
                className="todo-item__flag t-todo-complete-flag"
                onClick={this.toggleRecordComplete}
                data-todo-id={task.id}
              >
                [{task.isComplete ? 'x' : ''}]
              </span>
            </div>
          ))}
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
          onChange={this.handleChange}
          onKeyDown={this.createNewRecordByEnter}
          value={inputValue}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>
          +
        </span>
      </div>
    );
  }

  renderRecord = record => {
    return;
  };
}

export default withLocalstorage('todo-app', [])(Todo);
//export default Todo;
