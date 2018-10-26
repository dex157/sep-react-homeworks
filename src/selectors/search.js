import { createSelector } from 'reselect';

export const getSeries = createSelector(
    state => state.search.series,
    elements =>
        elements.map(({ id, image, name, summary }) => {
            return {
                id,
                image: image && image.medium,
                name: name ? name : '',
                summary
            };
        })
);
export const getIsLoading = state => state.search.isLoading;
export const getError = state => state.search.error;
