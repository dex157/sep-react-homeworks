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
    const recordId = event.target.dataset.todoId,
          { savedData, saveData } = this.props;

    let newData = [...savedData],
        foundRecord = newData.find((el, i) => ( ('' + el.id) === recordId ? true : false));

    foundRecord.isComplite = !foundRecord.isComplite

    saveData(newData);
  };

  createNewRecord = () => {
    const { savedData, saveData } = this.props;

    saveData([
      {
        id: this.getId(),
        isComplite: false,
        text: this.state.inputValue
      },
      ...savedData
    ]);

    this.setState({ inputValue: '' });
  };

  render() {
    const {savedData} = this.props;

    return(
      <Card title = "Список дел">
        <div className = "todo t-todo-list">
          {this.renderEmptyRecord()}

          { savedData.map((record) => (
            this.renderRecord(record)
          )) }

        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    return (
      <div className = "todo-item todo-item-new">
        <input className = "todo-input t-input" value = {this.state.inputValue} placeholder = "Введите задачу" onChange = {this.handleChange} onKeyPress = {this.createNewRecordByEnter} ></input>
        <span className = "plus t-plus" onClick = {this.createNewRecord} >+</span>
      </div>
    );
  }

  renderRecord = record => {
    return (
     
        <div key = {record.id} className = "todo-item t-todo">
          <p className = "todo-item__text"> {record.text} </p>
          <span className = "todo-item__flag t-todo-complete-flag" data-todo-id = {record.id} onClick = {this.toggleRecordComplete}>
            [
              { record.isComplite ? "x": "" }
            ]
          </span>
        </div>

    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
