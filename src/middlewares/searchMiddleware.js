import {
  fetchSearchRequest,
  fetchSearchSuccess,
  fetchSearchFailure,
} from '../actions/actions';
import { search } from '../api';

export const searchMiddleware = store => next => action => {
  if (action.type === fetchSearchRequest.toString()) {
    search(action.payload)
      .then(res => {
        store.dispatch(fetchSearchSuccess(res));
      })
      .catch(error => {
        store.dispatch(fetchSearchFailure(error));
      });
  }

  return next(action);
}