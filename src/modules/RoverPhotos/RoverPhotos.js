import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';

const sol = handleActions(
  {
    [changeSol]: (_state, action) => ({ current: action.payload })
  },
  {
    current: 3,
    min: 1,
    max: 100
  }
);

const photos = handleActions(
  {
    [fetchPhotosRequest]: (_state, action) => ({
      [action.payload.name]: {
        [action.payload.sol]: { isLoading: true, photos: [], isLoaded: false }
      }
    }),
    [fetchPhotosSuccess]: (_state, action) => ({
      [action.payload.name]: {
        [action.payload.sol]: {
          isLoading: false,
          photos: action.payload.photos,
          isLoaded: true
        }
      }
    })
  },
  {
    curiosity: {},
    opportunity: {},
    spirit: {}
  }
);

export default combineReducers({
  sol,
  photos
});
