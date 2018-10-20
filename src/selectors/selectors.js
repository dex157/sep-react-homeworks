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

export const getIsLoadingShow = state => state.shows.isLoading;
export const getErrorShow = state => state.shows.error;
export const getCast = createSelector(
    state => state.shows.elements,
    elements => {
        if (elements.length === 0) {
            return elements;
        }
        const { id, image, summary, name, _embedded: { cast } } = elements;                
        return { id, image: image ? image.medium : "", summary, name, cast };
    }
    
);