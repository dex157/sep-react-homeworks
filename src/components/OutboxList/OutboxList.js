import React from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

const OutboxList = ({ data, match }) => {
    const path = match.url;
    return (
        <div>
            <MailList path={path} data={data.outbox} tcss="t-outbox-list" />
        </div>
    );
};

export default withData(OutboxList);
