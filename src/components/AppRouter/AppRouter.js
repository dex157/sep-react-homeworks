import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail/InboxMail';
import OutboxMail from '../OutboxMail/OutboxMail';

import className from 'classnames';
import styles from './AppRouter.module.css';

class AppRouter extends Component {
  menuList = [
    { title: 'Home', path: '/app' },
    { title: 'Inbox', path: '/app/inbox' },
    { title: 'Outbox', path: '/app/outbox' }
  ];

  render() {
    const { match, location } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={className(styles.navList, 't-nav-list')}>
              {this.menuList.map(item => (
                <li key={item.title} className={styles.navElement}>
                  <NavLink
                    exact
                    to={item.path}
                    className={className(
                      styles.link,
                      't-link-' + item.title.toLowerCase()
                    )}
                    activeClassName="active"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>
              {location.pathname.indexOf('inbox') !== -1
                ? 'Inbox'
                : location.pathname.indexOf('outbox') !== -1
                  ? 'Outbox'
                  : 'Home'}
            </h3>
            <Switch>
              <Route exact path="/app" component={Home} />
              <Route exact path="/app/inbox" component={InboxList} />
              <Route exact path="/app/outbox" component={OutboxList} />
              <Route path="/app/inbox/:id" component={InboxMail} />
              <Route path="/app/outbox/:id" component={OutboxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRouter;
