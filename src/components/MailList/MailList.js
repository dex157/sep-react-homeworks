import React, { Component } from 'react'
import {Link} from 'react-router-dom';  
import mailStyle from './MailList.module.css'


class MailList extends Component{

    render(){
        const {style, url, data} = this.props;
        return (
            <div className={`${mailStyle.container} ${style}`}>
                {data.map((mail) => {
                    const textLink = mail.body.substring(0, 52) + "...";
                    return <Link className={mailStyle.link} key={mail.id} to={`${url.path}/${mail.id}`}>{textLink}</Link>;
                })}                
            </div>
        );
    }
}

export default MailList;