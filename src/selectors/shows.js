import { createSelector } from 'reselect';

export const getIsLoading = state => state.shows.isLoading;
export const getError = state => state.shows.error;
export const getShow = createSelector(
  state => state.shows.data,
  show => {
    if (!show) {
      return show;
    }
    const {
      id,
      image,
      summary,
      name,
      _embedded: { cast }
    } = show;
    const persons = cast.map(({ person: { image, name, id } }) => ({
      image,
      name,
      id
    }));
    return { id, name, image, summary, cast: persons };
  }
);
