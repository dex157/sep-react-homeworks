import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import searchMiddleware from './middlewares/searchMiddleware';

const getStore = function() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(searchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );
};

export default getStore;
