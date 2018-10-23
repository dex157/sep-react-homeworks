import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { addKey } from './actions';

const apiKey = handleActions(
  {
    [addKey]: (state, action) => action.payload
  },
  null
);

const isAuthorized = handleActions(
  {
    [addKey]: () => true
  },
  false
);

export default combineReducers({
  apiKey,
  isAuthorized
});

export const getIsAuthorized = state => state.auth.isAuthorized;

export const getApiKey = state => state.auth.apiKey;