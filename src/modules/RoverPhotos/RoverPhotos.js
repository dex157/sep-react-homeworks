import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { rovers } from '../../constants/rovers';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';

const photos = combineReducers(
  rovers.reduce((rover, name) => {
    rover[name] = handleActions(
      {
        [fetchPhotosRequest]: (_state, action) =>
          action.payload.name === name
            ? {
                ..._state,
                [action.payload.sol]: {
                  isLoading: true,
                  photos: [],
                  isLoaded: false
                }
              }
            : _state,
        [fetchPhotosSuccess]: (_state, action) =>
          action.payload.name === name
            ? {
                ..._state,
                [action.payload.sol]: {
                  isLoading: false,
                  photos: action.payload.photos,
                  isLoaded: true
                }
              }
            : _state,
        [fetchPhotosFailure]: (_state, action) =>
          action.payload.name === name
            ? {
                ..._state,
                [action.payload.sol]: {
                  isLoading: false,
                  error: action.payload.error,
                  isLoaded: true
                }
              }
            : _state
      },
      {}
    );
    return rover;
  }, {})
);

const sol = handleActions(
  {
    [changeSol]: (_state, action) => ({ ..._state, current: action.payload })
  },
  {
    min: 1,
    max: 100,
    current: 1
  }
);

export default combineReducers({ photos, sol });

export const getCurrentSol = state => state.roverPhotos.sol.current;
export const getMaxSol = state => state.roverPhotos.sol.max;
export const getMinSol = state => state.roverPhotos.sol.min;
export const getPhotos = state => state.roverPhotos.photos;
export const getSavedPhotos = (state, rover, sol) => {
  const {
    roverPhotos: { photos }
  } = state;

  return photos[rover][sol] !== undefined ? photos[rover][sol].photos : null;
};
