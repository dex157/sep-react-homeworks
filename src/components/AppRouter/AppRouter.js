import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { style } from 'ansi-colors';
import styles from './AppRouter.module.css';
import Home from '../Home';

const AppRouter = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul classList={styles.navList}>
          <li classList={styles.navElement}>
            <Link classList={styles.link} to="/app">Home</Link>
          </li>
          <li classList={styles.navElement}>
            <Link classList={styles.link} to="/app/inbox">Inbox</Link>
          </li>
          <li classList={styles.navElement}>
            <Link classList={styles.link} to="/app/outbox">Outbox</Link>
          </li>
        </ul>
      </nav>
      <div classList={styles.content}>
        <h3 classList={styles.title}>Home</h3>
        <Switch>
          <Route path="/app" exact component={Home} />
        </Switch>
      </div>
    </div>
  </div>




  // <Switch>
  //   <Route path="/" exact component={} />    
  // </Switch> 
)

export default AppRouter;
