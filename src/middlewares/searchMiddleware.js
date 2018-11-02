// import {
//     fetchSeriesFailure,
//     fetchSeriesSuccess,
//     fetchSeriesRequest,
//   } from './actions';
  
//   export const tvmazeFetchMiddleware = store => next => action => {
//     if (action.type === fetchSeriesRequest.toString()) {
//       fetch(`http://api.tvmaze.com/shows/${action.payload}/episodes`)
//         .then(response => response.json())
//         .then(series => {
//           store.dispatch(fetchSeriesSuccess(series));
//         })
//         .catch(error => {
//           store.dispatch(fetchSeriesFailure(error));
//         });
//     }
//     return next(action);
//   };
import { search } from '../api';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

export default (store) => (next) => (action) => {
    if(action.type === searchRequest.toString()){
        search(action.payload)
         .then(shows => {
             store.dispatch(searchSuccess(shows))
         })
         .catch(e => {
            store.dispatch(searchFailure(e.toString()));
         })
    }
    return next(action);
}