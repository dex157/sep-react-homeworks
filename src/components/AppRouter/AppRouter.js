import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import styles from './AppRouter.module.css';

import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutBoxList from '../OutboxList';
import OutBoxMail from '../OutboxMail';

class AppRouter extends Component {
  getTitle = () => {
    const {
      location: { pathname }
    } = this.props;

    const name = pathname.split('/')[2] || 'home';

    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  renderNav = () => (
    <ul className={styles.navList + ' t-nav-list'}>
      <li className={styles.navElement}>
        <NavLink className={styles.link + ' t-link-home'} to="/app" exact>
          Home
        </NavLink>
      </li>
      <li className={styles.navElement}>
        <NavLink className={styles.link + ' t-link-inbox'} to="/app/inbox">
          Inbox
        </NavLink>
      </li>
      <li className={styles.navElement}>
        <NavLink className={styles.link + ' t-link-outbox'} to="/app/outbox">
          Outbox
        </NavLink>
      </li>
    </ul>
  );

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>{this.renderNav()}</nav>
          <div className={styles.content}>
            <h3 className={styles.title}>{this.getTitle()}</h3>
            <Switch>
              <Route path="/app" component={Home} exact />
              <Route path="/app/inbox" component={InboxList} exact />
              <Route path="/app/inbox/:id" component={InboxMail} />
              <Route path="/app/outbox" component={OutBoxList} exact />
              <Route path="/app/outbox/:id" component={OutBoxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRouter;
