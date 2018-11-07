import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addKey } from './actions';

const apiKey = handleActions(
  {
    [addKey]: (_, action) => action.payload
  },
  null
);

export default combineReducers({
  apiKey
});

export const getIsAuthorized = state => !!state.auth.apiKey;
export const getApiKey = state => state.auth.apiKey;
