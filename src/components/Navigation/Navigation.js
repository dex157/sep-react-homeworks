import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import links from './links';
import styles from './Navigation.module.css';
import cx from 'classnames';

class Navigation extends PureComponent {
  renderlinks() {
    return links.map(({ name, to, isActive }) => (
      <li key={name} className={styles.navElement}>
        <NavLink
          className={cx(styles.link, `t-link-${name.toLowerCase()}`)}
          to={to}
          exact={name === 'Home'}
        >
          {name}
        </NavLink>
      </li>
    ));
  }
  render() {
    return (
      <ul className={cx(styles.navList, 't-nav-list')}>{this.renderlinks()}</ul>
    );
  }
}
export default Navigation;
