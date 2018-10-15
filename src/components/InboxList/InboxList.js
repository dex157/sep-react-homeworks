import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

const InboxList = ({ data, match }) => {
    const path = match.url;
    return (
        <div>
            <MailList path={path} data={data.inbox} tcss="t-inbox-list" />
        </div>
    );
};

export default withData(InboxList);
