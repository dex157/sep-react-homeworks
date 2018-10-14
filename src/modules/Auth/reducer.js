import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

const apiKey = handleActions(
    {
      [addApiKey]: (_state, action) => action.payload,
    },
    '',
  );

  export default combineReducers({
    apiKey,
  });