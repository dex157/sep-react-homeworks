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
export const getUser = state => state.user.data;
export const getIsLoading = state => state.user.isLoading;