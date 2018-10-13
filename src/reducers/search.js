import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  searchRequest,
  searchSucess,
  searchFailure
} from '../actions/searchActions';

const data = handleActions(
  {
    [searchSucess]: (state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [searchSucess]: () => null,
    [searchFailure]: (state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSucess]: () => false,
    [searchFailure]: () => false
  },
  false
);

export default combineReducers({
  data,
  error,
  isLoading
});
