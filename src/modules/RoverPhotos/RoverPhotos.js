import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';
import {
  handleRequest,
  handleRequestSuccess,
  handleRequestFailure
} from './utils';
import rovers from '../../utils/rovers';

const roversPhotosReducers = rovers.reduce((acc, rover) => {
  acc[rover] = handleActions(
    {
      [fetchPhotosRequest]: handleRequest(rover),
      [fetchPhotosSuccess]: handleRequestSuccess(rover),
      [fetchPhotosFailure]: handleRequestFailure(rover)
    },
    {}
  );
  return acc;
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

const photos = combineReducers(roversPhotosReducers);

export default combineReducers({
  photos,
  sol
});

export const getSelectedSol = state => state.roverPhotos.sol.current;

export const getMaxSol = state => state.roverPhotos.sol.max;

export const getMinSol = state => state.roverPhotos.sol.min;

export const getPhotos = (state, roverName, solId) => {
  const {
    roverPhotos: { photos }
  } = state;

  if (!photos[roverName][solId]) {
    return null;
  }

  return photos[roverName][solId].photos;
};

export const getRoversPhotos = state => state.roverPhotos.photos;
