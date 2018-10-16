import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import showMiddleware from './middlewares/showMiddleware';
import searchMiddleware from './middlewares/searchMiddleware';

export default () =>
  createStore(
    reducers,
    {},
    compose(
      applyMiddleware(searchMiddleware, showMiddleware),
      window.devToolsExtension
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );
