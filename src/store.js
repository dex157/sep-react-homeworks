import { createStore, compose, applyMiddleware } from 'redux';
import { searchSeries } from './modules/search';
import rootReducer from './modules';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(searchSeries),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),
  );

  return store;
};

export default createAppStore;