import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

export const getIsAuthorized = store => store.auth.apiKey !== null;
export const getApiKey = store => store.auth.apiKey;

const reducer = handleActions(
  {
    [addApiKey]: (_state, action) => ({ apiKey: action.payload })
  },
  { apiKey: null }
);

export default reducer;
