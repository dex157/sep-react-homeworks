import React from 'react'
import MailList from '../MailList'
import mailData from '../../context/Data/mailData'

const InboxList = ({ match }) => {

    const dataList = {
            url : match,
            data : mailData.inbox,
            style : "t-inbox-list"
        }

    return (        
        <MailList {...dataList}></MailList>
    );
}


export default InboxList;