import { createStore, compose, applyMiddleware } from 'redux';
import { searchMiddleware } from './middlewares/middlewares';
import rootReducer from './reducers/index';

const createAppStore = () => {
  console.log("createAppStore");
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(searchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),
  );

  return store;
};

export default createAppStore;