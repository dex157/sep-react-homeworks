import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InboxList extends Component {
  render() {
    const { dataI, style } = this.props;
    return (
      <React.Fragment>
        {dataI.map(link => (
          <p key={link.id}>
            <Link
              className={style.link}
              key={link.id}
              to={`/app/inbox/${link.id}`}
            >
              {`${link.body.substring(0, 50)}...`}
            </Link>
          </p>
        ))}
      </React.Fragment>
    );
  }
}

export default InboxList;
