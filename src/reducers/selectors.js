import { createSelector } from 'reselect';

export const getLoading = state => state.isLoading;

export const getError = state => state.error;

export const getShows = createSelector(
  state => state.data,
  shows =>
    shows.map(({ id, image, summary, name }) => ({ id, image, summary, name }))
);

export const getShowInfo = createSelector(
  state => state.data,
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
