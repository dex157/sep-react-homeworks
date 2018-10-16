import { createSelector } from 'reselect';

export const getIsLoading = state => state.shows.isLoading;
export const getError = state => state.shows.error;
export const getShowElements = createSelector(
    state => state.shows.elements,
    elements => {
        if (elements.length === 0) {
            return elements;
        }

        const { id, image, summary, name, _embedded: { cast } } = elements;
                
        return { id, name, image, summary, cast };
    }
);
