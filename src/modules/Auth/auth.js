import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addKey } from './actions';

const apiKey = handleActions(
  {
    [addKey]: (_state, action) => action.payload
  },
  ''
);

const isAuthorized = handleActions(
  {
    [addKey]: (_state, action) => action.payload
  },
  false
);

export default combineReducers({isAuthorized, apiKey});

export const getApiKey = state => state.auth.apiKey;
export const getIsAuthorized = state => state.auth.isAuthorized;
