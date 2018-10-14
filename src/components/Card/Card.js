import React, { PureComponent } from 'react';
import './Card.css';

class Card extends PureComponent {
  render() {
    const { title, children } = this.props;
    return (
      <div className="card">
        <h3 className="card__title card-title">{title}</h3>
        <div className="card-scrollable-content">
            <div className="todo t-todo-list">
                {children}
            </div>
        </div>
      </div>
    );
  }
}

export default Card;
