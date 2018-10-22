import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import { searchMiddleware, showMiddleware } from './middlewares'
import rootReducer from './reducers'


const getStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(searchMiddleware, showMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__() 
        : noop => noop
    )
  )

  return store;
}

export default getStore;