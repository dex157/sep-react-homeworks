import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styles from './AppRouter.module.css';
import cls from 'classnames';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

class AppRouter extends Component{
    // title = () => {
    //     const {
    //       location: { pathname }
    //     } = this.props;
    //     const string = pathname.split('/')[2] || 'home';
    
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   };
    render(){
        return(
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.navigation}>
                        <ul className={cls(styles.link, 't-nav-list')}>
                            <li className={styles.navElement}>
                                <Link className={cls(styles.link, 't-link-home')} to="/app">
                                    Home
                                </Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link className={cls(styles.link, 't-link-inbox')} to="/app/inbox">
                                inbox
                                </Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link className={cls(styles.link, 't-link-outbox')} to="/app/outbox">
                                outbox
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{this.title()}</h3>
                        <Switch>
                            <Route path="/app" component={Home}/>
                            <Route path="/app/inbox" component={InboxList} exact />
                            <Route path="/app/inbox/:id" component={InboxMail}/>
                            <Route path="/app/outbox" component={OutboxList} exact />
                            <Route path="/app/outbox/:id" component={OutboxMail}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
export default AppRouter;