import { handleActions } from 'redux-actions';
import { addKey } from './actions';

export const getIsAuthorized = state => state.auth.apiKey !== null;
export const getApiKey = state => state.auth.apiKey;

const reducer = handleActions(
  {
    [addKey]: (_state, action) => ({ apiKey: action.payload })
  },
  { apiKey: null }
);

export default reducer;
