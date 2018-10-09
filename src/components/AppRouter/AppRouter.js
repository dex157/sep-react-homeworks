import React, { Component } from 'react';
import styles from './AppRouter.module.css';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutBoxList from '../OutboxList';
import OutBoxMail from '../OutboxMail';

class AppRouter extends Component {
  state = {
    navbar: {
      home: {
        route: '/app',
        name: 'Home',
        exact: true
      },
      inbox: {
        route: '/app/inbox',
        name: 'Inbox',
        exact: false
      },
      outbox: {
        route: '/app/outbox',
        name: 'Outbox',
        exact: false
      }
    }
  };

  getNavigation = () => {
    const { navbar } = this.state;

    return Object.keys(navbar).map((navItem, key) => (
      <li className={styles.navElement} key={[navItem]}>
        <NavLink
          exact={navbar[navItem].exact}
          className={styles.link + ` t-link-${[navItem]}`}
          to={navbar[navItem].route}
        >
          {navbar[navItem].name}
        </NavLink>
      </li>
    ));
  };

  getTitle = () => {
    const {navbar} = this.state;
    const { location: { pathname } } = this.props;
    const action = pathname.split('/')[2];

    return (
      <h3 className={styles.title}>
        {action ? navbar[action].name : navbar['home'].name}
      </h3>
    );
  };
  
  render() {

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles.navList + ' t-nav-list'}>
              {this.getNavigation()}
            </ul>
          </nav>

          <div className={styles.content}>
            {this.getTitle()}
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

export default withRouter(AppRouter);
