import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import searchMiddleware from './middlewares/searchMiddleware'

// const getStore = () => createStore(
//     rootReducer,
//     compose(
//         applyMiddleware( searchMiddleware ),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
//     )
// );

// export default getStore;


export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(searchMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );