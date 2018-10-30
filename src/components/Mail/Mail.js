import React, { Component } from 'react';
import style from './Mail.module.css';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';

class Mail extends Component {
  render() {
    const { match } = this.props,
      id = match.params.id;
    if (match.path === '/app/inbox/:id') {
      return (
        <div className={`${style.container}`}>
          <InboxMail style={style} dataId={id} />
        </div>
      );
    } else {
      return (
        <div className={`${style.container}`}>
          <OutboxMail style={style} dataId={id} />
        </div>
      );
    }
  }
}

export default Mail;
