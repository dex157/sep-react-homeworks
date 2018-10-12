import { createStore, compose, applyMiddleware } from 'redux';
import { searchMiddleware } from './modules/search';
import { showMiddleware } from './modules/show';
import rootReducer from './modules';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(searchMiddleware),
      applyMiddleware(showMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),
  );

  return store;
};

export default createAppStore;