import React, { PureComponent } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';
import Home from '../Home';
import css from './AppRouter.module.css';

class AppRouter extends PureComponent {
    state = {
        activeTitle: 'Home',
        menu: [
            { name: 'Home', path: '/app' },
            { name: 'Inbox', path: '/app/inbox' },
            { name: 'Outbox', path: '/app/outbox' }
        ]
    };
    handleActiveItem = e => {
        this.setState({ activeTitle: e.target.dataset.key });
    };
    render() {
        const { activeTitle, menu } = this.state;

        return (
            <div className={css.wrapper}>
                <div className={css.container}>
                    <nav className={css.nav}>
                        <ul className={`${css.navList} t-nav-list`}>
                            {menu.map(item => {
                                return (
                                    <li key={item.name} className={css.navElement}>
                                        <Link
                                            onClick={this.handleActiveItem}
                                            className={`t-link-${item.name.toLowerCase()} ${
                                                css.link
                                            }`}
                                            to={item.path}
                                            data-key={item.name}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className={css.content}>
                        <h3 className={css.title}>{activeTitle}</h3>
                        <Switch>
                            <Route path="/app" component={Home} exact />
                            <Route path="/app/inbox" component={InboxList} exact />
                            <Route path="/app/inbox/:id" component={InboxMail} />
                            <Route path="/app/outbox" component={OutboxList} exact />
                            <Route path="/app/outbox/:id" component={OutboxMail} />
                            <Redirect to="/app" />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppRouter;
