import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

// reducers
const data = handleActions(
  {
    [fetchSuccess]: (_, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchFailure]: (_, action) => action.payload,
    [fetchSuccess]: () => null
  },
  null
);

// combine reducers
export default combineReducers({
  data,
  isLoading,
  error
});

// selectors
export const getFollowers = state => state.followers.data;
export const getIsLoading = state => state.followers.isLoading;
export const getError = state => state.followers.error;
