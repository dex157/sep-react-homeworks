import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import style from './AppRouter.module.css';

import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutBoxList from '../OutboxList';
import OutBoxMail from '../OutboxMail';

const tabs = require('../../config/tabs.json');
export default class AppRouter extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.nav}>
            <ul className={style.navList + ' t-nav-list'}>
              {tabs.map(item => (
                <li className={style.navElement} key={item.name}>
                  <NavLink
                    className={`${style.link} t-link-${item.name.toLowerCase()}`}
                    exact={item.name.toLowerCase() === 'home' ? true : false}
                    to={
                      item.name.toLowerCase() === 'home'
                        ? '/app'
                        : `/app/${item.name.toLowerCase()}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.content}>
            <Switch>
              {tabs.map(item => (
                <Route
                exact={item.name.toLowerCase() === 'home' ? true : false}
                path={
                  item.name.toLowerCase() === 'home'
                    ? '/app'
                    : `/app/${item.name.toLowerCase()}`
                }
                key={item.name}>
                  <h3 className={style.title}>{item.name}</h3>
                </Route>
              ))}
            </Switch>
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
