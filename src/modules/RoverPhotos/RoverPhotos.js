import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';
import rovers from '../../rovers/rovers';

const roversPhotoReduce = rovers.reduce((accum, rover) => {
  accum[rover] = handleActions(
    {
      [fetchPhotosRequest]: (state, action) =>
        action.payload.name === rover
          ? {
              ...state,
              [action.payload.sol]: {
                isLoading: true,
                photos: [],
                isLoaded: false
              }
            }
          : state,
      [fetchPhotosSuccess]: (state, action) =>
        action.payload.name === rover
          ? {
              ...state,
              [action.payload.sol]: {
                isLoading: false,
                photos: action.payload.photos,
                isLoaded: true
              }
            }
          : state,
      [fetchPhotosFailure]: (state, action) =>
        action.payload.name === rover
          ? {
              ...state,
              [action.payload.sol]: {
                isLoading: false,
                error: action.payload.error,
                isLoaded: true
              }
            }
          : state
    },
    {}
  );
  return accum;
}, {});

const sol = handleActions(
  {
    [changeSol]: (state, action) => ({ ...state, current: action.payload })
  },
  {
    current: 1,
    min: 1,
    max: 100
  }
);

const photos = combineReducers(roversPhotoReduce);
export default combineReducers({
  photos,
  sol
});

// selectors
export const getMaxSol = state => state.roverPhotos.sol.max;
export const getMinSol = state => state.roverPhotos.sol.min;
export const getCurrentSol = state => state.roverPhotos.sol.current;
export const getPhotos = state => state.roverPhotos.photos;
export const getSavedPhotos = (state, rover, sol) => {
  const {
    roverPhotos: { photos }
  } = state;

  return photos[rover][sol] ? photos[rover][sol].photos : null;
};
