import {
  fetchShowRequest,
  fetchShowSuccess,
  fetchShowFailure
} from '../actions/actions';
import { search, show} from '../api';

export const searchMiddleware = store => next => action => {
  if (action.type === fetchShowRequest.toString()) {
    search(action.payload)
      .then(res => {
        store.dispatch(fetchShowSuccess(res));
      })
  }

  return next (action);
}