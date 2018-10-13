import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { showRequest, showSucess, showFailure } from '../actions/showActions';

const data = handleActions(
  {
    [showSucess]: (state, action) => action.payload
  },
  null
);

const error = handleActions(
  {
    [showSucess]: () => null,
    [showFailure]: (state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [showRequest]: () => true,
    [showSucess]: () => false,
    [showFailure]: () => false
  },
  false
);

export default combineReducers({
  data,
  error,
  isLoading
});
