import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from '../actions';

const data = handleActions(
  {
    [showSuccess]: (state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [showSuccess]: () => null,
    [showFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  data,
  isLoading,
  error
});
