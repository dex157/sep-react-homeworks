import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

const InboxList = ({ data }) => <MailList type="inbox" mails={data.inbox} />;

export default withData(InboxList);