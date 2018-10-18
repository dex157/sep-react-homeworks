import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchFailure, fetchRequest, fetchSuccess } from './actions';

const data = handleActions(
    {
        [fetchRequest]: () => [],
        [fetchSuccess]: (_state, action) => action.payload,
        [fetchFailure]: () => null
    },
    [],
);
  
const isLoading = handleActions(
    {
        [fetchRequest]: () => true,
        [fetchSuccess]: () => false,
        [fetchFailure]: () => false,
    },
    false,
);
  
const error = handleActions(
    {
        [fetchRequest]: () => null,
        [fetchFailure]: (_state, action) => action.payload,
    },
    null,
);
  
export default combineReducers({
    data,
    isLoading,
    error,
});