import { searchRequest, searchSuccess, searchFailure } from './actions';
import { search } from '../../api';

export const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(data => {
        store.dispatch(searchSuccess(data));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }
  return next(action);
};
