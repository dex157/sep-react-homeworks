import { createSelector } from 'reselect';

export const getIsLoading = state => state.shows.isLoading;
export const getError = state => state.shows.error;
export const getShows = createSelector(
  state => state.search.data,
  shows =>
    shows.map(({ id, name, image, summary }) => ({ id, name, image, summary }))
);