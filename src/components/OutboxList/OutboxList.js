import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class OutboxList extends Component {
  render() {
    const { data } = this.props;
    
    return <MailList mails={data.outbox} type="outbox" />;
  }
}

export default withData(OutboxList);