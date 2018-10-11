import { createSelector } from 'reselect';

export const isFetching = state => state.search.isFetching;
export const getError = state => state.search.error;
export const getResult = createSelector(
  state => state.search.result,
  elements =>
    elements.map(({ id, image: { medium }, name, summary }) => ({
      id,
      image: medium,
      name,
      summary
    }))
);
