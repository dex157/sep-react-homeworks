import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

// make reducers
const apiKey = handleActions(
  {
    [addApiKey]: (_, action) => action.payload
  },
  null
);

const isAuthorized = handleActions(
  {
    [addApiKey]: () => true
  },
  false
);

// combine reducers
export default combineReducers({
  apiKey,
  isAuthorized
});

// selectors
export const getIsAuthorized = state => state.auth.isAuthorized;
export const getApiKey = state => state.auth.apiKey;
