import { showRequest, showSuccess, showFailure} from '../actions/actions'
import {show, search} from '../api'
  
export const tvmazeFetchMiddleware = store => next => action => {
    if (action.type === showRequest.toString()) {
      show
        .then(shows => {
          store.dispatch(showSuccess(shows));
        })
        .catch(error => {
          store.dispatch(showFailure(error));
        });
    }
    return next(action);
};
  