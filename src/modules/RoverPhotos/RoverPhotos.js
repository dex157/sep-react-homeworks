import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import produce from 'immer'
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from './actions';

const choiceSol = { current: 12, min: 1, max: 100 }
export const rovers = [ 'curiosity', 'opportunity', 'spirit' ];

const defaultPhotoState = rovers.reduce((acc, rover) => {
  acc[rover] = {}
  return acc
}, {})

const sol = handleActions({
  [changeSol]: (_state, action) => ({ ..._state,
    current: action.payload
  }),
}, choiceSol)

const photos = handleActions({
  [fetchPhotosRequest]: (state, action) => {
    const { name, sol } = action.payload;
    
    return produce(state, draft => {
      draft[name][sol] = {
        isLoading: true,
        isLoaded: false,
        photos: []
      }
    })
  },
  [fetchPhotosSuccess]: (state, action) => {
      const { name, sol, photos} = action.payload;

      return produce(state, draft => {
        draft[name][sol] = {
          isLoading: false,
          isLoaded: true,
          photos: photos
        }
      })
  },
  [fetchPhotosFailure]: (state, action) => {
      const { name, sol, error} = action.payload;

      return produce(state, draft => {
        draft[name][sol] = {
          isLoading: false,
          isLoaded: false,
          error: error
        }
      })
  },
}, defaultPhotoState)


export default combineReducers({
  sol,
  photos,
})

export const getChangeSol = state => state.roverPhotos.sol
export const getPhotosRover = state => state.roverPhotos.photos