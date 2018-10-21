import { searchRequest, searchSuccess, searchFailure} from '../actions/actions'
import { showRequest, showSuccess, showFailure } from '../actions/actions'
import {show, search} from '../api'

export const searchMiddleware = store => next => action => {
  console.log("searchMiddleware");
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

export const showMiddleware = store => next => action => {
  console.log("showMiddleware");
    if (action.type === showRequest.toString()) {
      show(action.payload)
        .then(shows => {
          store.dispatch(showSuccess(shows));
        })
        .catch(error => {
          store.dispatch(showFailure(error));
        });
    }
    return next(action);
};
  