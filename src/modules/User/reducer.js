import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

// reducers
const data = handleActions(
  {
    [fetchRequest]: () => [],
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
    [fetchRequest]: () => null
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
export const getUser = state => state.user.data;
export const getIsLoading = state => state.user.isLoading;
export const getError = state => state.user.error;
