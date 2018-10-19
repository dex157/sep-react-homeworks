
import { createSelector } from 'reselect';
export const getSol = state => state.roverPhotos.sol;createSelector(
    state => state.roverPhotos,
    sol => {
      if (!sol) {
        return sol;
      } else {
        return (sol = sol.map(({ current,min,max }) => ({
          min,
          max,
          current
        })));
      }
    }
  );

export const getPhotos = state => state.roverPhotos.photos;
