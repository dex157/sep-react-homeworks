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
        event.key === 'Enter' && this.createNewRecord();
    };

    toggleRecordComplete = event => {
        const { savedData, saveData } = this.props;
        const todoId = Number(event.target.dataset.todoId);

        saveData(
            savedData.map(item => {
                return item.id === todoId
                    ? { ...item, active: !item.active }
                    : item;
            })
        );
    };

    createNewRecord = () => {
        const { saveData, savedData } = this.props;
        const { inputValue } = this.state;
        if (inputValue) {
            saveData([
                {
                    value: inputValue,
                    id: this.getId(),
                    active: false
                },
                ...savedData
            ]);
            this.setState({ inputValue: '' });
        }
    };

    render() {
        const { savedData } = this.props;

        return (
            <Card title="Список дел">
                <div className="todo t-todo-list">
                    {this.renderEmptyRecord()}
                    {savedData.map(item => this.renderRecord(item))}
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
                <span onClick={this.createNewRecord} className="plus t-plus">
                    +
                </span>
            </div>
        );
    }

    renderRecord = record => {
        return (
            <div key={record.id} className="todo-item t-todo">
                <p className="todo-item__text">{record.value}</p>
                <span
                    className="todo-item__flag t-todo-complete-flag"
                    data-todo-id={record.id}
                    onClick={this.toggleRecordComplete}
                >
                    [{record.active && 'x'}]
                </span>
            </div>
        );
    };
}

export default withLocalstorage('todo-app', [])(Todo);
