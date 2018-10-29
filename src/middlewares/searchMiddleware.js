import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../reducers/search';
import {
  showRequest,
  showSuccess,
  showFailure
} from '../reducers/snows'

import * as api from '../api';

const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    api
      .search(action.payload)
      .then(result => {
        if (result !== undefined || result !== null)
          store.dispatch(searchSuccess(result));
        else store.dispatch(searchFailure('return nothing'));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }
  if (action.type === showRequest.toString()) {
    api
      .show(action.payload)
      .then(result => {
        if (result !== undefined || result !== null)
          store.dispatch(showSuccess(result));
        else store.dispatch(showFailure('return nothing'));
      })
      .catch(error => {
        store.dispatch(showFailure(error));
      });
  }
  return next(action);
};

export default searchMiddleware;
