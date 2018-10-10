import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import styles from './MailList.module.css'

 const MailList = ({mails, path, className}) => {
     return (
         <div className={cn(styles.container, className)}>
            { 
                mails.map(
                    ({id, body}) => 
                        <NavLink
                            key={id} 
                            className={styles.link} 
                            to={`${path}/${id}`} 
                            children={`${body.substr(0, 52)}...`} 
                        />
                    )
            }
        </div>
     );
 }

export default MailList