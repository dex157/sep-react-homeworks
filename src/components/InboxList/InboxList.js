import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

const InboxList = ({ data }) => <MailList mails={data.inbox} type="inbox" />;

export default withData(InboxList);
