import { search } from '../api';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

export default store => next => action => {
  const result = next(action);

  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(shows => store.dispatch(searchSuccess(shows)))
      .catch(error => store.dispatch(searchFailure(error)));
  }

  return result;
};