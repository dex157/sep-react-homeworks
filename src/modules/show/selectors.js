import { createSelector } from 'reselect';

export const isFetching = state => state.shows.isFetching;
export const getError = state => state.shows.error;
export const getResult = state => state.shows.entities

// createSelector(
//   state => state.search.result,
//   elements =>
//     elements.map(({ id, image, name, summary }) => ({
//       id,
//       image,
//       name,
//       summary
//     }))
// );
