import React, { Component } from 'react';
import style from './MailList.module.css';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import { withData } from '../../context/Data';

class MailList extends Component {
  render() {
    const data = this.props,
      { match } = this.props;
    if (match.path === '/app/inbox') {
      return (
        <div className={`${style.container} t-inbox-list`}>
          <InboxList style={style} dataI={data.data.inbox} />
        </div>
      );
    } else {
      return (
        <div className={`${style.container} t-outbox-list`}>
          <OutboxList style={style} dataO={data.data.outbox} />
        </div>
      );
    }
  }
}

export default withData(MailList);
