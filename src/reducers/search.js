import {
  handleActions
} from 'redux-actions';
import {
  combineReducers
} from 'redux';
import {
  fetchSearchRequest,
  fetchSearchSuccess,
  fetchSearchFailure,
} from '../actions/actions';

const elements = handleActions(
  {
    [fetchSearchRequest]: () => [],
    [fetchSearchSuccess]: (_state, action) => action.payload,
  },
  []
)

const isLoading = handleActions(
  {
    [fetchSearchRequest]: () => true,
    [fetchSearchSuccess]: () => false,
    [fetchSearchFailure]: () => false,
  },
  false
)

const error = handleActions(
  {
      [fetchSearchRequest]: () => null,
      [fetchSearchFailure]: (_state, action) => action.payload
  },
  null
)

export default combineReducers({
  elements,
  isLoading,
  error,
})