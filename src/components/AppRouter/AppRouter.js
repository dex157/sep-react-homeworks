import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import styles from './AppRouter.css';

export default () => {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/" component={Search} exact />
        <Route path="/show/:id" component={ShowPage} />
      </Switch>
    </div>
  );
};