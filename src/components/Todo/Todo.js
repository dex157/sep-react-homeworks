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
    if (event.key !== 'Enter') {
      return;
    }
    this.createNewRecord();
  };

  validate = value => !!value;

  toggleRecordComplete = event => {
    const id = Number(event.target.dataset.id);
    const { savedData, saveData } = this.props;
    const data = savedData.map(record => {
      if (id === Number(record.id)) {
        return { ...record, complete: !record.complete };
      }
      return record;
    });
    saveData(data);
  };

  createNewRecord = () => {
    const { savedData, saveData } = this.props;
    const { inputValue } = this.state;

    if (!this.validate(inputValue)) {
      return;
    }
    saveData([
      ...savedData,
      {
        id: this.getId(),
        name: inputValue,
        complete: false
      }
    ]);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          <div className="todo-item todo-item-new">
            <input
              className="todo-input t-input"
              value={inputValue}
              placeholder="Введите задачу"
              onChange={this.handleChange}
              onKeyPress={this.createNewRecordByEnter}
            />
            <span className="plus t-plus" onClick={this.createNewRecord}>
              +
            </span>
          </div>
          {this.renderRecords()}
        </div>
      </Card>
    );
  }

  renderRecords = () => {
    const { savedData } = this.props;

    return savedData.map(this.renderRecord).reverse();
  };

  renderRecord = record => {
    return (
      <div className="todo-item t-todo" key={record.id}>
        <p className="todo-item__text">{record.name}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-id={record.id}
          onClick={this.toggleRecordComplete}
        >
          {`[${record.complete ? 'x' : ''}]`}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
