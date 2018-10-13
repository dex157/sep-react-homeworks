import {
  searchRequest,
  searchSucess,
  searchFailure
} from '../actions/searchActions';
import { search } from '../api';

export default ({ dispatch }) => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(shows => {
        dispatch(searchSucess(shows));
      })
      .catch(() => {
        dispatch(searchFailure('сетевая ошибка, попробуйте снова'));
      });
  }
  return next(action);
};