import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure
} from './actions';

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchSuccess]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isLoading,
  data
});

/*
const initialState = {
  isLoading: false,
  data: null
};

const reducer = (state = initialState, action) => state;
export default reducer;
*/
