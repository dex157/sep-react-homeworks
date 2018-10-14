import React, { Component } from 'react'
import style from './AppRouter.module.css'
import { withAuth } from '../../context/Auth'
import {Route, Redirect} from 'react-router-dom';
import Home from '../Home'
import InboxList from '../InboxList'
import OutboxList from '../OutboxList'
import InboxMail from '../InboxMail'
import OutboxMail from '../OutboxMail'
import AppNav from './AppNav'



class AppRouter extends Component{
    
    getTitle = () => {
        const {match} = this.props;
        var url = match.url.substring(5);
        url = url ? url : "Home";
        return (url);
    }

    render(){
       const {isAuthorized} =  this.props;
       
       return (
       isAuthorized ?
       <div className={style.wrapper}>
            <div className={style.container}>
                <AppNav/>
                <div className={style.content}>
                    <h3 className={style.title}>
                        {this.getTitle()}
                    </h3>
                    <div className={style.content}>
                        <Route path="/app" component={Home} exact/>
                        <Route path="/app/inbox" component={InboxList}  exact/>
                        <Route path="/app/outbox" component={OutboxList}  exact/>
                        <Route path="/app/inbox/:id" component={InboxMail}  />
                        <Route path="/app/outbox/:id" component={OutboxMail}  />
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