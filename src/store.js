import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';

import searchMiddleware from './middlewares/searchMiddleware';
import showMiddleware from './middlewares/showMiddleware';

const createAppStore = () => {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(searchMiddleware, showMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

  return store;
};

export default createAppStore;
