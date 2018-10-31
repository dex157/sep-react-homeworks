import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchRequest, searchSuccess, searchFailure } from '../actions';

const data = handleActions(
  {
    [searchSuccess]: (state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [searchSuccess]: () => null,
    [searchFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  data,
  isLoading,
  error
});
