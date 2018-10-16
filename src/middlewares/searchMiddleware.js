import { search } from '../api';
import { searchRequest, searchSuccess, searchFailure } from '../actions';

export default ({ dispatch }) => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(shows => {
        dispatch(searchSuccess(shows));
      })
      .catch(() => {
        dispatch(searchFailure('Oшибка, попробуйте снова'));
      });
  }
  return next(action);
};
