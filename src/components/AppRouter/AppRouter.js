import React, { PureComponent } from 'react';
import './AppRouter.css';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import ShowPage from '../ShowPage';
import Search from '../Search';

class AppRouter extends PureComponent {
  render() {
    return (
      <div className="App">
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
