import {searchRequest, searchSuccess, searchFailure} from '../actions/searchActions';
import {search} from '../api';

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