import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

class OutboxList extends Component {
  render() {
    const { data } = this.props;
    return (
      <MailList className="t-outbox-list" emails={data.outbox} type="outbox" />
    );
  }
}

export default withData(OutboxList);
