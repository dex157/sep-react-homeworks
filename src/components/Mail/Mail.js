import React from 'react'
import styles from './Mail.module.css'

 const Mail = ({from, to, body}) => {
     return (
         <div className={styles.container}>
            { from && 
                <p className={'t-mail-from'}> 
                    From: <b>{from}</b> 
                </p> 
            }
            { to && 
                <p className={'t-mail-to'}> 
                    To: <b>{to}</b> 
                </p> 
            }
            <p className={'t-mail-body'} children={body} />
        </div>
     );
 }

export default Mail