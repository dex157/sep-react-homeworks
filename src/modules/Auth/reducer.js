import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

const isAuthorized = handleActions(
  {
    [addApiKey]: () => true
  },
  false
);

const apiKey = handleActions(
  {
    [addApiKey]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  isAuthorized,
  apiKey
});

export const getIsAuthorized = state => state.auth.isAuthorized;

export const getApiKey = state => state.auth.apiKey;
