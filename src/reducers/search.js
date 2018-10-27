import { combineReducers } from 'redux';
import { createAction } from 'redux-actions';
import { handleActions } from 'redux-actions';

// ACTIONS
export const searchRequest = createAction('SEARCH_REQUEST');
export const searchSuccess = createAction('SEARCH_SUCCESS');
export const searchFailure = createAction('SEARCH_FAILURE');

// SELECTORS
export const getSearch = store => store.search;

// REDUCERS
const isFetching = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

const result = handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  result,
  error
});
