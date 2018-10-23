import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { addKey } from './actions';

const apiKey = handleActions(
  {
    [addKey]: (_, action) => action.payload
  },
  null
);

const isAuthorized = handleActions(
  {
    [addKey]: () => true
  },
  false
);

// combine
export default combineReducers({
  apiKey,
  isAuthorized
});

// selectors
export const getIsAuthorized = state => state.auth.isAuthorized;
export const getApiKey = state => state.auth.apiKey;
