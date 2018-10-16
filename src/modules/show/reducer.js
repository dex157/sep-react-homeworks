import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    showRequest,
    showSuccess,
    showFailure,
} from './actions';

const elements = handleActions(
    {
        [showRequest]: () => [],
        [showSuccess]: (_state, action) => action.payload,
    },
    [],
);

const isLoading = handleActions(
    {
        [showRequest]: () => true,
        [showSuccess]: () => false,
        [showFailure]: () => false,
    },
    false,
);

const error = handleActions(
    {
        [showRequest]: () => null,
        [showFailure]: (_state, action) => action.payload,
    },
    null,
);

export default combineReducers({
    elements,
    isLoading,
    error,
});