import { handleActions } from 'redux-actions';
import {searchRequest, searchSuccess, searchFailure} from '../actions/actions'
import { combineReducers } from 'redux';


const elements = handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (_state, action) => action.payload,
  },
  [],
);

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchFailure]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  elements,
  isLoading,
  error,
});