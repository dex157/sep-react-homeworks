import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchFailure, fetchRequest, fetchSuccess } from './actions';

const isLoading = handleActions(
    {
      [fetchRequest]: () => true,
      [fetchSuccess]: () => false,
      [fetchFailure]: () => false,
    },
    false,
  );

  
const data = handleActions(
    {
      [fetchSuccess]:  (_state, action) => action.payload,
    },
    []
  );

  export default combineReducers({
      isLoading, data
  });
  