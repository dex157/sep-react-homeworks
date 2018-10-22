import {
  fetchShowRequest,
  fetchShowSuccess,
  fetchShowFailure,
} from '../actions/actions';
import { show } from '../api';

export const showMiddleware = store => next => action => {
  if (action.type === fetchShowRequest.toString())
    show(action.payload)
      .then(res => {
        store.dispatch(fetchShowSuccess(res));
      })
      .catch(error => {
        store.dispatch(fetchShowFailure(error));
    });
    
  return next(action);
}