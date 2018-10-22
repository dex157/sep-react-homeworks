import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';
import {minSol, maxSol, defaultSol, rovers} from './selectors'

const sol = handleActions(
  {
    [changeSol]: (_state, action) => ({..._state, current: action.payload })
  },
  {
    current: defaultSol,
    min: minSol,
    max: maxSol
  }
);

const photos = handleActions(
  {
    
    [fetchPhotosRequest]: (_state, action) => ({
      ..._state,
      [action.payload.name]: {..._state[action.payload.name],
        [action.payload.sol]: { isLoading: true, photos: [], isLoaded: false }
      }
    }),
    [fetchPhotosSuccess]: (_state, action) => ({
      ..._state,
      [action.payload.name]: {..._state[action.payload.name],
        [action.payload.sol]: {
          isLoading: false,
          photos: action.payload.photos,
          isLoaded: true
        }
      }
    }),
    [fetchPhotosFailure]: (_state, action) => ({
      ..._state,
      [action.payload.name]: {..._state[action.payload.name],
        [action.payload.sol]: {
          isLoading: false,
          photos: [],
          isLoaded: false
        }
      }
    })
  },
  rovers
);

export default combineReducers({
  sol,
  photos
});
