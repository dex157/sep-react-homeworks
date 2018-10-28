import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import InboxMail from '../InboxMail';

const AppRouter = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={`${styles.navList} t-nav-list`}>
          <li className={styles.navElement}>
            <Link className={`${styles.link} t-link-home`} to="/app">
              Home
            </Link>
          </li>
          <li className={styles.navElement}>
            <Link className={`${styles.link} t-link-inbox`} to="/app/inbox">
              Inbox
            </Link>
          </li>
          <li className={styles.navElement}>
            <Link className={`${styles.link} t-link-outbox`} to="/app/outbox">
              Outbox
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Switch>
            <Route path="/app" exact children={<p>Home</p>} />
            <Route path="/app/inbox" children={<p>Inbox</p>} />
            <Route path="/app/outbox" children={<p>Outbox</p>} />
          </Switch>
        </h3>
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

export default AppRouter;
