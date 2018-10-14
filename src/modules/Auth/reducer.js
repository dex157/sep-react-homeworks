import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { 
    addApiKey,
} from './actions';

const key = handleActions(
    {
        [addApiKey]: (_state, action) => action.payload,
    },
    null,
);

const isAuthorized = handleActions(
    {
        [addApiKey]: () => true,
    },
    false,
);

export default combineReducers({
    key,
    isAuthorized,
});

