import React, { PureComponent } from 'react';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import cn from 'classnames';
import styles from './AppRouter.module.css';

const links = [
  {
    name: 'Home',
    to: '/app'
  },
  {
    name: 'Inbox',
    to: '/app/inbox'
  },
  {
    name: 'Outbox',
    to: '/app/outbox'
  }
];

class AppRouter extends PureComponent {
  renderNav = () => {
    return (
      <nav className={styles.nav}>
        <ul className={cn(styles.navList, 't-nav-list')}>
          {this.renderLinks(links)}
        </ul>
      </nav>
    );
  };

  renderLinks = links => {
    return links.map(({ name, to }) => {
      return (
        <li key={name} className={styles.navElement}>
          <NavLink
            className={cn(styles.link, `t-link-${name.toLowerCase()}`)}
            to={to}
            children={name}
            exact={name === 'Home'}
          />
        </li>
      );
    });
  };

  renderHeader = () => {
    const {
      location: { pathname }
    } = this.props;
    const path = pathname.split('/');
    return (
      <h3 className={styles.title}>
        {this.capitalizeFirstChar(path[2]) || 'Home'}
      </h3>
    );
  };

  capitalizeFirstChar = str => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.substr(1);
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {this.renderNav()}
          <div className={styles.content}>
            {this.renderHeader()}
            <Switch>
              <Route path="/app" exact component={Home} />
              <Route path="/app/inbox" exact component={InboxList} />
              <Route path="/app/inbox/:id" component={InboxMail} />
              <Route path="/app/outbox" exact component={OutboxList} />
              <Route path="/app/outbox/:id" component={OutboxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppRouter);
