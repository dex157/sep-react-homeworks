import { createSelector } from 'reselect';

export const getIsLoading = state => state.followers.isLoading;
export const getFollowers = createSelector(
  state => state.followers.data,
  followers => {
    if (!followers) {
      return followers;
    } else {
      return (followers = followers.map(({ id, avatar_url, login }) => ({
        id,
        avatar_url,
        login
      })));
    }
  }
);
