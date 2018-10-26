import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import { searchMiddleware, showMiddleware } from './middlewares';
const createAppStore = () => {
    const store = createStore(
        reducers,
        compose(
            applyMiddleware(searchMiddleware),
            applyMiddleware(showMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop
        )
    );
    return store;
};
export default createAppStore;
