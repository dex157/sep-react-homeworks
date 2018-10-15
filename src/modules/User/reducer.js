import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

const data = handleActions(
  {
    [fetchFailure]: () => null,
    [fetchSuccess]: (state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchFailure]: () => false,
    [fetchSuccess]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchFailure]: (state, action) => action.payload,
    [fetchSuccess]: () => null
  },
  null
);

export default combineReducers({
  data,
  isLoading,
  error
});

export const getUser = createSelector(
  state => state.user.data,
  user => {
    if (!user || typeof user !== 'object') {
      return user;
    }
    const { name, bio, avatar_url } = user;

    return { name, bio, avatar_url };
  }
);

export const getUserIsLoading = state => state.user.isLoading;

export const getUserError = state => state.user.error;
