import { createSelector } from 'reselect';

export const getIsLoading = state => state.search.isLoading;
export const getError = state => state.search.error;
export const getSeriesElements = createSelector(
    state => state.search.elements,
    elements =>
        elements.map(({ id, image, name, summary }) => ({
            id,
            image,
            name,
            summary
        }))
);
