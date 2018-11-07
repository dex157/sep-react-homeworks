import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';

export const rovers = ['curiosity', 'opportunity', 'spirit'];

const photos = combineReducers(
  rovers.reduce((pv, rover) => {
    pv[rover] = handleActions(
      {
        [fetchPhotosRequest]: (state, action) => {
          const { name, sol } = action.payload;
          return name === rover
            ? {
                ...state,
                [sol]: { photos: null, isLoaded: false }
              }
            : state;
        },
        [fetchPhotosSuccess]: (state, action) => {
          const { name, sol, photos } = action.payload;
          return name === rover
            ? { ...state, [sol]: { photos, isLoaded: true } }
            : state;
        },
        [fetchPhotosFailure]: (state, action) => {
          const { name, sol, error } = action.payload;
          return name === rover
            ? { ...state, [sol]: { error, isLoading: false } }
            : state;
        }
      },
      {}
    );
    return pv;
  }, {})
);

const sol = handleActions(
  { [changeSol]: (state, action) => ({ ...state, current: action.payload }) },
  { current: 1, min: 1, max: 100 }
);

export default combineReducers({
  photos,
  sol
});

export const getSol = state => state.roverPhotos.sol;
export const getRoversPhotos = state => state.roverPhotos.photos;
export const getSavedPhotos = (state, roverName, solId) => {
  const {
    roverPhotos: { photos }
  } = state;

  if (!photos[roverName][solId]) {
    return null;
  }

  return photos[roverName][solId].photos;
};
