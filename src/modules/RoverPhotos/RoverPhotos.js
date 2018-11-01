import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';

const photos = handleActions(
  {
    [fetchPhotosRequest]: (_state, action) => ({
      ..._state,
      [action.payload.name]: {
        ..._state[action.payload.name],
        [action.payload.sol]: {
          isLoading: true,
          isLoaded: false,
          photos: []
        }
      }
    }),
    [fetchPhotosSuccess]: (_state, action) => {
      return {
        ..._state,
        [action.payload.name]: {
          ..._state[action.payload.name],
          [action.payload.sol]: {
            isLoading: false,
            isLoaded: true,
            photos: [...action.payload.photos]
          }
        }
      };
    },
    [fetchPhotosFailure]: (_state, action) => {
      return {
        ..._state,
        [action.payload.name]: {
          ..._state[action.payload.name],
          [action.payload.sol]: {
            isLoading: false,
            isLoaded: true,
            photos: [],
            error: action.payload.error
          }
        }
      }
    }
  },
  {
    curiosity: {},
    opportunity: {},
    spirit: {}
  }
);

const sol = handleActions(
  {
    [changeSol]: (_state, action) => ({
      ..._state,
      current: action.payload
    })
  },
  {
    current: 1,
    min: 1,
    max: 100
  }
);

export default combineReducers({
  sol,
  photos
});