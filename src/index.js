import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import './index.css';
import createStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
