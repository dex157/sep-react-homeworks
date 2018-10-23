import {
  handleActions
} from 'redux-actions';
import {
  combineReducers
} from 'redux';
import {
  fetchShowRequest,
  fetchShowSuccess,
  fetchShowFailure,
} from '../actions/actions';

const show = handleActions(
  {
    [fetchShowRequest]: () => [],
    [fetchShowSuccess]: (_state, action) => action.payload,
  },
  []
)

const isLoading = handleActions(
  {
    [fetchShowRequest]: () => true,
    [fetchShowSuccess]: () => false,
    [fetchShowFailure]: () => false,
  },
  false
)

const error = handleActions(
  {
      [fetchShowRequest]: () => null,
      [fetchShowFailure]: (_state, action) => action.payload
  },
  null
)

export default combineReducers({
  show,
  isLoading,
  error,
})