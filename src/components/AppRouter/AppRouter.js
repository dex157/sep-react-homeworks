import React, { Component } from 'react';
//import { Switch, Route, Link } from 'react-router-dom';
import style from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutBoxList from '../OutboxList';
import OutBoxMail from '../OutboxMail';

class AppRouter extends Component {
  state = {};
  render() {
    return <div>{Home}</div>;
  }
}

export default AppRouter;
