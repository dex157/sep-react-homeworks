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
    this.setState({inputValue : event.target.value})
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter'){
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    const newSavedData = savedData.map((data) => {
      if (data.id === parseInt(event.target.id, 10)){
        return {...data, x : data.x === "[x]" ? "[]" : "[x]"}
      }
      else return {...data}
    })
    
    saveData(newSavedData);
  };

  createNewRecord = () => {    
    const { savedData, saveData } = this.props;
    const {inputValue} = this.state;

    if(inputValue !== ""){
      const id = this.getId();
      const newSavedData = [{id: id, value : inputValue, x : "[]"},...savedData]
      saveData(newSavedData);
      this.setState({inputValue : ""});
    }    
  };

  render() {
    const { savedData } = this.props;

    return (
    <Card title="Список дел">      
      <div className="todo t-todo-list">
        {this.renderEmptyRecord()}
        {savedData.map(this.renderRecord)}
      </div>
    </Card>);
  }

  renderEmptyRecord() {
    const {inputValue} = this.state
    
    return (
    <div className="todo-item todo-item-new">
      <input
        className = "todo-input t-input"
        placeholder = "Введите задачу"
        value = {inputValue}
        onChange = {this.handleChange}
        onKeyPress = {this.createNewRecordByEnter}
      />
      <span 
        className="plus t-plus" 
        onClick={this.createNewRecord}>
        +
      </span>
    </div>);
  }

  renderRecord = record => {
    const {id, value, x} = record;
    return (
      <div className="todo-item t-todo" key={id}>
        <p className = "todo-item__text">{value}</p>
        <span 
          className="todo-item__flag t-todo-complete-flag"
          onClick={this.toggleRecordComplete}
          id = {id}>
          {x}
        </span>
      </div>);
  };
}

export default withLocalstorage('todo-app', [])(Todo);
