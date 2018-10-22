import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

const apiKey = handleActions(
  {
    [addApiKey]: (_state, action) => action.payload
  },
  ''
);

const isAuthorized = handleActions(
  {
    [addApiKey]: (_state, action) => (action.payload ? true : false)
  },
  false
);

export default combineReducers({ apiKey, isAuthorized });

export const getApiKey = state => state.auth.apiKey;
export const getIsAuthorized = state => state.auth.isAuthorized;
