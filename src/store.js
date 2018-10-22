import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import { searchMiddleware } from './middlewares/searchMiddleware'
import rootReducer from './reducers'


const getStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(searchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__() 
        : noop => noop
    )
  )

  return store;
}

export default getStore;