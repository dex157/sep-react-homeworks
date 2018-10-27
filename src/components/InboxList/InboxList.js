import React, {Component} from 'react';
import {withData} from '../../context/Data';
import MailList from '../MailList'

class InboxList extends Component {
  render() {
    const {data} = this.props
    return (
      <MailList className={'t-inbox-list'} mails={data.inbox} type='inbox' />
    )
  }
}

export default withData(InboxList);
