import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchSuccess]: (_, action) => action.payload,
    [fetchFailure]: (_, action) => action.payload
  },
  null
);

export default combineReducers({ isLoading, data });

export const getData = state => state.followers.data;
export const getIsLoading = state => state.followers.isLoading;
