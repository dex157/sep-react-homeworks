import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import searchMiddleware from './middlewares/searchMiddleware';
import showMiddleware from './middlewares/showMiddleware';

export default () => {
  return createStore(
    reducers,
    {},
    compose(
      applyMiddleware(searchMiddleware, showMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );
};
