import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

const createAppStore = () => {
    const sagaMiddleware = createSagaMiddleware(rootSaga);

    const store = createStore(
        rootReducer,
        compose(
            
          applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
        )
      );
       return store;
};

export default createAppStore;
