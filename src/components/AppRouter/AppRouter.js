import React, { Component } from 'react';
import {Switch, NavLink, Route} from 'react-router-dom';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import { initialState } from './initialState';

class AppRouter extends Component {
    state = initialState;

    getMenu = () => {
        const { nav } = this.state;

        return (
            Object.keys(nav).map((element) => (
                <li 
                    className={styles.navElement} 
                    key={nav[element].name.toLowerCase()}>
                    <NavLink
                        className={styles.link + ` t-link-${nav[element].name.toLowerCase()}`} 
                        to={nav[element].route}
                        exact>
                        {nav[element].name}
                    </NavLink>
                </li>
            ))
        )
    }

    getTitle = () => {
        const { location } = this.props;
        const { nav } = this.state;

        let title = location.pathname.split('/')[2];
        switch (title) {
            case 'inbox': 
                title = nav['inbox'].name;
                break;
            case 'outbox': 
                title = nav['outbox'].name;
                break;
            default: 
                title = nav['home'].name;
        }

        return (
            <h3 className={styles.title}>
                {title}
            </h3>
        );
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={styles.navList + ' t-nav-list'}>
                            {this.getMenu()}
                        </ul>
                    </nav>
                    <div className={styles.content}>
                        {this.getTitle()}
                        <Switch>
                            <Route path="/app" component={Home} exact />
                            <Route path="/app/inbox" component={InboxList} exact />
                            <Route path="/app/inbox/:id" component={InboxMail} />
                            <Route path="/app/outbox" component={OutboxList} exact />
                            <Route path="/app/outbox/:id" component={OutboxMail} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppRouter;