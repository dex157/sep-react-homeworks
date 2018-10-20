import React, { PureComponent } from 'react';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

class AppRouter extends PureComponent {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" component={Search} exact />
                    <Route path="/shows/:id" component={ShowPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(AppRouter);
