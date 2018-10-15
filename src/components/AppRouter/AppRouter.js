import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';

export default class AppRouter extends Component {
    state = {
        title: 'Home'
    }

    handleMenuItem = (event) => {
        this.setState({
            title: event.target.dataset.mitem
        })
    }

    render () {
        const { title } = this.state;

        return (
            <div className = { styles.wrapper }>
                <div className = { styles.container }>
                    <nav className = { styles.nav }>
                        <ul className = {`${styles.navList} t-nav-list`}>
                            <li className = "navElement">
                                <Link to = "/app" className = { `${styles.link} t-link-home` } data-mitem = "Home" onClick = { this.handleMenuItem }>Home</Link>
                            </li>

                            <li className = "navElement">
                                <Link to = "/app/inbox" className = { `${styles.link} t-link-inbox` } data-mitem = "Inbox" onClick = { this.handleMenuItem }>Inbox</Link>
                            </li>

                            <li className = "navElement">
                                <Link to = "/app/outbox" className = { `${styles.link} t-link-outbox` } data-mitem = "Outbox" onClick = { this.handleMenuItem }>Outbox</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className = { styles.content }>
                        <h3 className = { styles.title }>
                            {title}
                        </h3>
                        <Switch>
                            <Route exact path = "/app" component = {Home} /> 
                            <Route exact path = "/app/inbox" component = {InboxList} />
                            <Route exact path = "/app/inbox/:id" component = {InboxMail} />
                            <Route exact path = "/app/outbox" component = {OutboxList} />
                            <Route exact path = "/app/outbox/:id" component = {OutboxMail} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}