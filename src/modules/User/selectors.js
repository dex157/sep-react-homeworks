import { createSelector } from 'reselect';

export const getUserIsLoading = state => state.user.isLoading;
export const getUser = createSelector(
  state => state.user.data,
  user => {
    if (!user) {
      return user;
    }
    const { name, bio, avatar_url } = user;
    return { name, bio, avatar_url };
  }
);
