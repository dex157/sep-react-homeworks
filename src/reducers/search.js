import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import { createSelector } from 'reselect';
import {searchRequest, searchSuccess, searchFailure} from '../actions/searchActions';

const data = handleActions(
    {
      [searchSuccess]: (state, action) => action.payload
    },
    []
  );
  
const error = handleActions(
    {
      [searchSuccess]: () => null,
      [searchFailure]: (state, action) => action.payload
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
export const getShows = createSelector(
  state => state.data,
  shows =>
    shows.map(({ id, image, summary, name }) => ({ id, image, summary, name }))
);