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

export const getFollowers = createSelector(
  state => state.followers.data,
  followers => {
    if (!followers) {
      return followers;
    }
    return (followers = followers.map(({ id, login, avatar_url }) => ({
      id,
      login,
      avatar_url
    })));
  }
);
export const getFollowersIsLoading = state => state.followers.isLoading;
export const getFollowersError = state => state.followers.error;
