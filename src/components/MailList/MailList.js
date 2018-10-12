import React, { Component } from 'react'
import mailData from '../../context/Data/mailData'
import {Link} from 'react-router-dom';  
import style from './MailList.module.css'


class MailList extends Component{

    render(){

        return (
            <div className={`${style.container} ${this.props.style}`}>
                {this.props.data.map((mail) => {
                    const textLink = mail.body.substring(0, 52) + "...";
                    return <Link className={style.link} key={mail.id} id={mail.id} to={`${this.props.url.path}/${mail.id}`}>{textLink}</Link>;
                })}                
            </div>
        );
    }
}

export default MailList;