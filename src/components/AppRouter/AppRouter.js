import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './AppRouter.css';

import Search from '../Search';
import ShowPage from '../ShowPage';

const AppRouter = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Search} exact />
      <Route path="/shows/:id" component={ShowPage} />
    </Switch>
  </div>
);

export default AppRouter;