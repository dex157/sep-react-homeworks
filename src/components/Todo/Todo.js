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
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    const id = event.target.dataset.todoId;

    saveData(
      savedData.map(
        record =>
          record.id === Number(id)
            ? { ...record, isComplete: !record.isComplete }
            : record
      )
    );
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

      this.setState({ inputValue: '' });
    }
  };

  render() {
    console.log('render');

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {this.renderRecord()}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    const { inputValue } = this.state;
    return (
      <div className="todo-item todo-item-new">
        <input
          type="text"
          className="todo-input t-input"
          placeholder="Введите задачу"
          onChange={this.handleChange}
          value={inputValue}
          onKeyPress={this.createNewRecordByEnter}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>
          +
        </span>
      </div>
    );
  }

  renderRecord = record => {
    const { savedData } = this.props;
    return savedData.map(item => (
      <div key={item.id} className="todo-item t-todo">
        <p className="todo-item__text"> {item.text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={item.id}
          onClick={this.toggleRecordComplete}
        >[
          {item.isComplete ? 'x' : '' }
        ]
        </span>
      </div>
    ));
  };
}

export default withLocalstorage('todo-app', [])(Todo);
