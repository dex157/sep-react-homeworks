import { createSelector } from 'reselect';

export const getIsLoading = state => state.shows.isLoading;
export const getError = state => state.shows.error;
export const getSerials = createSelector(
    state => state.shows.elements,
    elements =>
    elements.map(({ id, name, image: { medium }, summary }) => ({
      id,
      name,
      image: medium,
      summary
    })),
);