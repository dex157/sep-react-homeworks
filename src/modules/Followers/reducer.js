import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure} from './actions'

const data = handleActions({
  [fetchRequest]: () => null,
  [fetchSuccess]: (_state, action) => action.payload,
  [fetchFailure]: (_state, action) => action.payload,
}, null)

const isLoading = handleActions({
  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchFailure]: () => false,
}, false)

export default combineReducers({
  data,
  isLoading,
})

//selectors
export const getFollower = state => state.followers.data;
export const getIsLoading = state => state.followers.isLoading;