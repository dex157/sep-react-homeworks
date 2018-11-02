import React, { PureComponent } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Search from 'components/Search';
import ShowPage from 'components/ShowPage';
import styles from './AppRouter.css';

class AppRouter extends PureComponent {
  render() {
    return (
      <div className={styles.App}>
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/shows/:id" component={ShowPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
