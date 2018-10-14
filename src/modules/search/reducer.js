import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    seriesRequest,
    seriesSuccess,
    seriesFailure,
} from './actions';

const elements = handleActions(
    {
        [seriesRequest]: () => [],
        [seriesSuccess]: (_state, action) => action.payload,
    },
    [],
);

const isLoading = handleActions(
    {
        [seriesRequest]: () => true,
        [seriesSuccess]: () => false,
        [seriesFailure]: () => false,
    },
    false,
);

const error = handleActions(
    {
        [seriesRequest]: () => null,
        [seriesFailure]: (_state, action) => action.payload,
    },
    null,
);

export default combineReducers({
    elements,
    isLoading,
    error,
});