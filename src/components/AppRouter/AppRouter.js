import React, { Component } from 'react';
import style from './AppRouter.module.css';
import cls from 'classnames';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

class AppRouter extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <nav className={style.nav}>
            <ul className={cls(style.navList, 't-nav-list')}>
              <li className={style.navElement}>
                <Link to="/app" className={cls(style.link, 't-link-home')}>
                  Home
                </Link>
              </li>
              <li className={style.navElement}>
                <Link
                  to="/app/inbox"
                  className={cls(style.link, 't-link-inbox')}
                >
                  Inbox
                </Link>
              </li>
              <li className={style.navElement}>
                <Link
                  to="/app/outbox"
                  className={cls(style.link, 't-link-outbox')}
                >
                  Outbox
                </Link>
              </li>
            </ul>
          </nav>
          <div className={cls(style.content)}>
            <h3 className={style.title}>Home</h3>
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
