import React, { Component } from 'react'
import style from './Mail.module.css'

class Mail extends Component{

    render(){
        const {from, to, body} = this.props;
        return (
            <div className={style.container}>            
                <p className={from ? "t-mail-from": "t-mail-to"}>
                    {from ? "From": "To"} : {from ? from : to}
                </p>                
                <p className="t-mail-body">{body}</p>
            </div>
       );
    }
}

export default Mail;