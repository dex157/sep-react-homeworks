import { createSelector } from 'reselect';

export const getShow = createSelector(
    state => state.shows.shows,
    ({ id, image, name, summary, _embedded }) => {
        return {
            id,
            image: image && image.medium,
            name,
            summary,
            actors:
                _embedded &&
                _embedded.cast.map(item => {
                    return item.person;
                })
        };
    }
);

export const getIsLoading = state => state.shows.isLoading;
export const getError = state => state.shows.error;
