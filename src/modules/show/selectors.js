import { createSelector } from 'reselect';

export const isFetching = state => state.shows.isFetching;
export const getError = state => state.shows.error;
export const getResult = createSelector(
  state => state.shows.entities,
  elements =>
    elements.map(({ id, image, name, summary, _embedded: { cast } }) => ({
      id,
      image,
      name,
      summary,
      cast
    }))
);
