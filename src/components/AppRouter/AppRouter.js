import React from 'react';
import { Route } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';

export default () => (
    <div className = "App">
        <Route exact path = "/" component = { Search } />
        <Route path = "/shows/:id" component = { ShowPage } />
    </div>
)