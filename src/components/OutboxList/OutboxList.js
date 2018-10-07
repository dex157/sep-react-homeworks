import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxList extends PureComponent {
    render() {
        const { data } = this.props;
        const mailList = data.outbox;

        return <MailList list={mailList} target="outbox" />;
    }
}

export default withData(InboxList);
