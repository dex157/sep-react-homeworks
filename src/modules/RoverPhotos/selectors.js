import { createSelector } from 'reselect';
export const getSol = state => state.roverPhotos.sol;
createSelector(
  state => state.roverPhotos,
  sol => {
    if (!sol) {
      return sol;
    } else {
      return (sol = sol.map(({ current, min, max }) => ({
        min,
        max,
        current
      })));
    }
  }
);

export const getPhotos = state => state.roverPhotos.photos;

export const getSavedPhotos = (state, name, sol) => {
  const { roverPhotos } = state;

  return roverPhotos.photos[name][sol]
    ? roverPhotos.photos[name][sol].photos
    : null;
};

export const rovers = { curiosity: {}, opportunity: {}, spirit: {} };

export const minSol = 1;

export const maxSol = 100;

export const defaultSol = 1;
