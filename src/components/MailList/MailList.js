import React, {Component} from 'react';
import style from './MailList.module.css';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import { withData } from '../../context/Data';

class MailList extends Component {

    render() {
        const dataI = this.props.data.inbox,
              dataO = this.props.data.outbox,
              {location} = this.props;

        if(location.pathname === '/app/inbox') {
            return (
                <div className={`${style.container} t-inbox-list`}>
                    <InboxList style={style} dataI={dataI}/>
                </div>
            );
        } else {
            return (
                <div className={`${style.container} t-outbox-list`}>
                    <OutboxList style={style} dataO={dataO}/>
                </div>
            );
        }

    }
}

export default withData(MailList);