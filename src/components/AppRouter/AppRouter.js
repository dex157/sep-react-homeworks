import React, { Component } from 'react';
import styles from './AppRouter.module.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navigation from '../Navigation';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutBoxList from '../OutboxList';
import OutBoxMail from '../OutboxMail';

class AppRouter extends Component {
  renderTitle = () => {
    const {
      location: { pathname }
    } = this.props;
    const path = pathname.split('/');

    return (
      <h3 className={styles.title}>
        {path[2] ? this.capitalize(path[2]) : 'Home'}
      </h3>
    );
  };

  capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Navigation {...this.props} />
          </nav>
          <div className={styles.content}>
            {this.renderTitle()}
            <Switch>
              <Route path="/app" exact component={Home} />
              <Route path="/app/inbox" exact component={InboxList} />
              <Route path="/app/inbox/:id" component={InboxMail} />
              <Route path="/app/outbox" exact component={OutBoxList} />
              <Route path="/app/outbox/:id" component={OutBoxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AppRouter);
