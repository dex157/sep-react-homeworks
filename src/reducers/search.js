import { handleActions } from 'redux-actions';
import {SearchRequest, SearchSuccess, SearchFailure} from '../actions/actions'
import { combineReducers } from 'redux';


const elements = handleActions(
  {
    [SearchRequest]: () => [],
    [SearchSuccess]: (_state, action) => action.payload,
  },
  [],
);

const isLoading = handleActions(
  {
    [SearchRequest]: () => true,
    [SearchSuccess]: () => false,
    [SearchFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [SearchRequest]: () => null,
    [SearchFailure]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  elements,
  isLoading,
  error,
});