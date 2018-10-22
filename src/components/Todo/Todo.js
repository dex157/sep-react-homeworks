import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

const NewTodoItem = props => {
  const { title, value, onItemChange, onAddBtnClick, onEnterPress } = props;
  return (
    <div className="todo-item todo-item-new">
      <input
        className="todo-input t-input"
        placeholder={title}
        value={value}
        onChange={onItemChange}
        onKeyPress={onEnterPress}
      />
      <span className="plus t-plus" onClick={onAddBtnClick}>
        +
      </span>
    </div>
  );
};

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
    const { value } = event.target;
    this.setState({ inputValue: value });
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
    const idNewRecord = this.getId();
    if (inputValue !== '') {
      saveData([
        ...savedData,
        {
          id: idNewRecord,
          isComplete: false,
          data: inputValue
        }
      ]);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    const { inputValue } = this.state;
    const { savedData } = this.props;
    console.log('withLocalstorage(Todo)->',this.props);

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          <NewTodoItem
            title="Введите задачу"
            value={inputValue}
            onItemChange={this.handleChange}
            onAddBtnClick={this.createNewRecord}
            onEnterPress={this.createNewRecordByEnter}
          />
          {savedData.map(value => this.renderRecord(value))}
        </div>
      </Card>
    );
  }

/*
  renderEmptyRecord() {
    return;
  }
*/

  renderRecord = record => {
    const { id, data, isComplete } = record;
    return (
      <div key={id} className="todo-item t-todo">
        <p className="todo-item__text">{data}</p>
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

export default withLocalstorage('todo-app2', [])(Todo);
