import React, { Component } from 'react';
import {Switch, NavLink, Route} from 'react-router-dom';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

const nav = {
  home: {
    name: 'Home',
    route: '/app'
  },
  inbox: {
    name: 'Inbox',
    route: '/app/inbox'
  },
  outbox: {
    name: 'Outbox',
    route: '/app/outbox'
  }
};

class AppRouter extends Component {
  getMenu = () => {
    return (
      Object.keys(nav).map(item => (
        <li 
          className={styles.navElement} 
          key={nav[item].name.toLowerCase()}>
          <NavLink
            className={styles.link + ` t-link-${nav[item].name.toLowerCase()}`} 
            to={nav[item].route}
            children={nav[item].name}
            exact
          />
        </li>
      ))
    );
  }

  getTitle = () => {
    const { location } = this.props;
    let title = location.pathname.split('/')[2];

    switch (title) {
      case 'inbox':
        return nav['inbox'].name;
      case 'outbox':
        return nav['outbox'].name;
      default:
        return nav['home'].name;
    }
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
            <h3 className={styles.title}>
              {this.getTitle()}
            </h3>
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