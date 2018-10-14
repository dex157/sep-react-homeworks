import React from 'react'
import MailList from '../MailList'
import mailData from '../../context/Data/mailData'

const OutboxList = ({ match }) => {

    const dataList = {
            url : match,
            data : mailData.outbox,
            style : "t-outbox-list"
        }

       return (        
           <MailList {...dataList}></MailList>
       );
}

export default OutboxList;