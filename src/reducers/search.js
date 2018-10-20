import { searchRequest, searchSuccess, searchFailure } from '../actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const series = handleActions(
    {
        [searchRequest]: () => [],
        [searchSuccess]: (_state, action) => action.payload
    },
    []
);

const isLoading = handleActions(
    {
        [searchRequest]: () => true,
        [searchSuccess]: () => false,
        [searchFailure]: () => false
    },
    false
);

const error = handleActions(
    {
        [searchRequest]: () => null,
        [searchFailure]: (_state, action) => action.payload
    },
    null
);

export default combineReducers({ series, isLoading, error });
