import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { compose } from 'recompose';
import { withAuth } from '../../context/Auth';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

const navMenus = [
  {
    title: 'Home',
    path: '',
  },
  {
    title: 'Inbox',
    path: '/inbox',
  },
  {
    title: 'Outbox',
    path: '/outbox',
  },
];

class AppRouter extends Component {
  componentDidMount() {
    const { isAuthorized, history } = this.props;

    if (!isAuthorized) {
      history.push('/');
    }
  }

  render() {
    const { match } = this.props;
    // console.log(match);

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={`${styles.navList} t-nav-list`}>
              {navMenus.map(el => (
                <li key={el.title} className={styles.navElement}>
                  <NavLink
                    activeClassName="active"
                    className={`${styles.link} t-link-${el.title.toLowerCase()}`}
                    exact
                    to={`${match.url}${el.path}`}
                  >
                    {el.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>
              <Switch>
                {/* <Route
                  path={`${match.url}*`}
                  render={({ match }) => {
                    const menu = navMenus.find(
                      menuItem => menuItem.path === match.params[0]
                    )
                    return menu.title;
                  }}
                /> */}
                  <Route exact path='/app' render={() => ('Home')}/>
                  <Route path='/app/inbox' render={() => ('Inbox')}/>
                  <Route path='/app/outbox' render={() => ('Outbox')}/>
              </Switch>
            </h3>
            <Switch>
              <Route exact path={`${match.url}`} component={Home} />
              <Route exact path={`${match.url}/inbox`} component={InboxList} />
              <Route path={`${match.url}/inbox/:id`} component={InboxMail} />
              <Route exact path={`${match.url}/outbox`} component={OutboxList} />
              <Route path={`${match.url}/outbox/:id`} component={OutboxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withAuth)(AppRouter);
