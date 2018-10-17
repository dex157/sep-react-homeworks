import { createStore, compose, applyMiddleware } from 'redux';
// import { tvmazeFetchMiddleware } from './modules/series';
// import rootReducer from './modules';

const getStore = () => {
    console.log("getStore");
  const store = createStore(
    // rootReducer,
    compose(
    //   applyMiddleware(tvmazeFetchMiddleware),
    //   window.__REDUX_DEVTOOLS_EXTENSION__
    //     ? window.__REDUX_DEVTOOLS_EXTENSION__()
    //     : noop => noop,
    ),
  );

  return store;
};

export default getStore;