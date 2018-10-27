import { combineReducers } from 'redux';
import { createAction } from 'redux-actions';
import { handleActions } from 'redux-actions';

// ACTIONS
export const showRequest = createAction('SHOW_REQUEST');
export const showSuccess = createAction('SHOW_SUCCESS');
export const showFailure = createAction('SHOW_FAILURE');

// SELECTORS
export const getIsFetching = store => store.shows.isFetching;
export const getEntities = store => store.shows.entities;
export const getError = store => store.shows.error;

// REDUCERS
const isFetching = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

const entities = handleActions(
  {
    [showRequest]: () => {},
    [showSuccess]: (_state, action) => action.payload
  },
  null
);

const error = handleActions(
  {
    [showRequest]: () => null,
    [showFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  entities,
  error
});
