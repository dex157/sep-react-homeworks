import React, { Component } from 'react'
import style from './AppRouter.module.css'
import {Link} from 'react-router-dom';

class AppNav extends Component{
    render(){      
        return (
                <nav className={style.nav} >
                     <ul className={`${style.navList} t-nav-list`}>
                        <li className={style.navElement}>
                            <Link className={`${style.navElement} t-link-home active`} to="/app" >Home</Link>
                        </li>
                        <li className={style.navElement}>
                            <Link className={`${style.navElement} t-link-inbox`} to="/app/inbox">Inbox</Link>
                        </li>
                        <li className={style.navElement}>
                             <Link className={`${style.navElement} t-link-outbox`} to="/app/outbox">Outbox</Link>
                        </li>
                    </ul>
                </nav>
        );
    }
}

export default AppNav;