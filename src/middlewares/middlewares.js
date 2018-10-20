import { searchRequest, searchSuccess, searchFailure} from '../actions/actions'
import {show, search} from '../api'

export const searchMiddleware = store => next => action => {
  // console.log("searchMiddleware");
    if (action.type === searchRequest.toString()) {
      search(action.payload)
        .then(shows => {
          store.dispatch(searchSuccess(shows));
        })
        .catch(error => {
          store.dispatch(searchFailure(error));
        });
    }
    return next(action);
};
  