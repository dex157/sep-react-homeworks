import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    searchRequest,
    searchSuccess,
    searchFailure,
} from './actions';

const isFetching = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false,
  },
  false,
);

const result = handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (_state, action) => action.payload,
  },
  [],
);

const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchSuccess]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  isFetching,
  result,
  error
});
