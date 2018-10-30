import React, { Component } from 'react';
import { withData } from '../../context/Data';
import { Switch, Route, Link } from 'react-router-dom';
import style from './AppRouter.module.css';
import Home from '../Home';
import MailList from '../MailList';
import Mail from '../Mail';

class AppRouter extends Component {
  state = {
    currentCategory: 'Home'
  };
  linkFormatter = () => {
    let { data } = this.props,
      dataLink = [...Object.keys(data)].map(
        item => item.charAt(0).toUpperCase() + item.slice(1)
      );
    return dataLink;
  };
  selectCategoryHandler = e => {
    const value = e.target.innerText;
    this.setState({
      currentCategory: value
    });
  };
  render() {
    const dataLink = this.linkFormatter(),
      { currentCategory } = this.state;
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <nav className={style.nav}>
            <ul className={`${style.navList} t-nav-list`}>
              <li>
                <Link
                  className={`${style.link} t-link-home ${'Home' ===
                    currentCategory && 'active'}`}
                  onClick={this.selectCategoryHandler}
                  to="/app"
                >
                  Home
                </Link>
              </li>
              {dataLink.map(link => (
                <li key={link}>
                  <Link
                    className={`${
                      style.link
                    } t-link-${link.toLowerCase()} ${link === currentCategory &&
                      'active'}`}
                    onClick={this.selectCategoryHandler}
                    to={`/app/${link.toLowerCase()}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={style.content}>
            <h3 className={style.title}>{currentCategory}</h3>
            <Switch>
              <Route path="/app/inbox/:id" component={Mail} exact />;
              <Route path="/app/outbox/:id" component={Mail} exact />;
              <Route path="/app/inbox" component={MailList} exact />
              <Route path="/app/outbox" component={MailList} exact />
              <Route path="/app" component={Home} exact />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withData(AppRouter);
