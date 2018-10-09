import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import style from './AppRouter.module.css'

import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

class AppRouter extends Component {
    title = () => {
        const {location: { pathname }} = this.props;
        const string = pathname.split('/')[2] || 'home';
      
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    render() {
        return(
            <div className = {style.wrapper}>
                <div className = {style.container}> 
                    <nav className = {style.navigation}>
                        <ul className = {style.navList + ' t-nav-list'}> 
                            <li className = {style.navElement}> 
                                <Link className = {style.link + ' t-link-home'} to = "/app">Home</Link>
                            </li>
                            <li className = {style.navElement}> 
                                <Link className = {style.link + ' t-link-inbox'} to = "/app/inbox">Inbox</Link>
                            </li>
                            <li className = {style.navElement}> 
                                <Link className = {style.link + ' t-link-outbox'} to = "/app/outbox">Outbox</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className = {style.content}>
                        <h3 className = {style.title}>{this.title()}</h3>
                        <Switch>
                            <Route exact path = "/app" component = {Home}/>
                            <Route exact path = "/app/inbox" component = {InboxList}/>
                            <Route path = "/app/inbox/:id" component = {InboxMail}/>
                            <Route exact path = "/app/outbox" component = {OutboxList}/>
                            <Route path = "/app/outbox/:id" component = {OutboxMail}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppRouter;