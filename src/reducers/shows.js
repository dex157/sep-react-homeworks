import { showRequest, showSuccess, showFailure } from '../actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const shows = handleActions(
    {
        [showRequest]: () => [],
        [showSuccess]: (_state, action) => action.payload
    },
    []
);

const isLoading = handleActions(
    {
        [showRequest]: () => true,
        [showSuccess]: () => false,
        [showFailure]: () => false
    },
    false
);

const error = handleActions(
    {
        [showRequest]: () => null,
        [showFailure]: (_state, action) => action.payload
    },
    null
);

export default combineReducers({ shows, isLoading, error });
