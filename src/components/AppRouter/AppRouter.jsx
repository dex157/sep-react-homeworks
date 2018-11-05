import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './AppRouter.module.css';
import Search from '../Search';
import ShowPage from '../ShowPage';

const AppRouter = () => (
  <div className={styles.App}>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/shows/:id" component={ShowPage} />
      </Switch>      
  </div>
)

export default AppRouter;
