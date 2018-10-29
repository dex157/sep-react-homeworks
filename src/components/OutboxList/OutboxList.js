import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OutboxList extends Component {
  render() {
    const { dataO, style } = this.props;
    return (
      <React.Fragment>
        {dataO.map(link => (
          <p key={link.id}>
            <Link
              className={style.link}
              key={link.id}
              to={`/app/outbox/${link.id}`}
            >
              {`${link.body.substring(0, 50)}...`}
            </Link>
          </p>
        ))}
      </React.Fragment>
    );
  }
}

export default OutboxList;
