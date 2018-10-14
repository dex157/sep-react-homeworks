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
    if (event.key === 'Enter') this.createNewRecord();
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    const { savedData, saveData } = this.props;
    

    if (inputValue) {
      saveData([
        {
          id: this.getId(),
          value: inputValue,
          isComplete: false
        },
        ...savedData
      ]);
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    const dataId = parseInt(event.target.dataset.todoId, 10);
    const newData = savedData.map(dataItem => {
      return dataItem.id === dataId
        ? { ...dataItem, isComplete: !dataItem.isComplete }
        : dataItem;
    });

    saveData(newData);
  };

  render() {

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
          className="todo-input t-input"
          placeholder="Введите задачу"
          value={inputValue}
          onChange={this.handleChange}
          onKeyDown={this.createNewRecordByEnter}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>
          +
        </span>
      </div>
    );
  }

  renderRecord = () => {
    const { savedData } = this.props;

    return (
      savedData.map(item => (
        <div className="todo-item t-todo" key={item.id}>
          <p className="todo-item__text">{item.value}</p>
          <span
            className="todo-item__flag t-todo-complete-flag"
            data-todo-id={item.id}
            onClick={this.toggleRecordComplete}
          >
            [{item.isComplete ? 'x' : ''}]
          </span>
        </div>
      ))
    )
  };
}

export default withLocalstorage('todo-app', [])(Todo);
