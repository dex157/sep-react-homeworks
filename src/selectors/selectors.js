import { createSelector } from 'reselect';

export const getIsLoading = state => state.search.isLoading;
export const getError = state => state.search.error;
export const getSerials = createSelector(
    state => state.search.elements,
    elements =>
    elements.map(({ id, name, image, summary }) => ({
      id,
      name,
      image: image ? image.medium : "",
      summary
    })),
);