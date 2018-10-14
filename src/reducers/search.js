import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const data = handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (_, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [searchSuccess]: () => null,
    [searchFailure]: (_, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

export default combineReducers({
  data,
  error,
  isLoading
});

export const getLoading = state => state.isLoading;
export const getError = state => state.error;
export const getData = createSelector(
  state => state.data,
  shows =>
    shows.map(({ id, image, summary, name }) => ({ id, image, summary, name }))
);
