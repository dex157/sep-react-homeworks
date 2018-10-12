import React, { Component } from 'react';
import style from './AppRouter.module.css';
import cls from 'classnames';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';

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
                <a href="" className={cls(style.link, 't-link-home')}>
                  2
                </a>
              </li>
              <li className={style.navElement}>
                <a href="" className={cls(style.link, 't-link-home')}>
                  3
                </a>
              </li>
            </ul>
          </nav>
          <div className={cls(style.content)}>
            <Route path="/app" component={Home} />
          </div>
        </div>
      </div>
    );
  }
}

export default AppRouter;
