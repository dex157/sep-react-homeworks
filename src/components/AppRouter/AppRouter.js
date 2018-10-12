import React, { Component } from 'react'
import style from './AppRouter.module.css'
import { withAuth } from '../../context/Auth'
import {Route, Link, Redirect} from 'react-router-dom';
import Home from '../Home'
import InboxList from '../InboxList'
import OutboxList from '../OutboxList'
import InboxMail from '../InboxMail'
import OutboxMail from '../OutboxMail'



class AppRouter extends Component{
    
    getTitle = () => {
        var url = this.props.match.url.substring(5);
        url = url ? url : "Home";
        return (url);
    }


    render(){
       const {isAuthorized} =  this.props;
       
       return (
       isAuthorized ?
       <div className={style.wrapper}>
            <div className={style.container}>
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
                <div className={style.content}>
                    <h3 className={style.title}>
                        {this.getTitle()}
                    </h3>
                    <div className={style.content}>
                        <Route path="/app" component={Home} exact/>
                        <Route path="/app/inbox" component={InboxList}  exact/>
                        <Route path="/app/outbox" component={OutboxList}  exact/>
                        <Route path="/app/inbox/*" component={InboxMail}  />
                        <Route path="/app/outbox/*" component={OutboxMail}  />
                    </div>
                </div>
            </div>
       </div>
       :
       <Redirect from="/app" to="/" />
       );
        
    }
};

export default withAuth(AppRouter);