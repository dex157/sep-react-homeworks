import React, { Component } from 'react'
import style from './Mail.module.css'

class Mail extends Component{

    render(){
        const input = this.props.from;
        const output = this.props.to;
        return (
            <div className={style.container}>            
                <p className={input ? "t-mail-from": "t-mail-to"}>
                    {input ? "From": "To"} : {input ? input : output}
                </p>                
                <p className="t-mail-body">{this.props.body}</p>
            </div>
       );
    }
}

export default Mail;