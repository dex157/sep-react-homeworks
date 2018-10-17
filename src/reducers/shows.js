import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { 
    getShowRequest, 
    getShowSuccess, 
    getShowFailure 
} from '../actions'

const data = handleActions({
    [getShowRequest]: () => {}, 
    [getShowSuccess]: (_state, action) => action.payload
}, {});

const isLoading = handleActions({
    [getShowRequest]: () => false, 
    [getShowSuccess]: () => true,
    [getShowFailure]: () => true
}, true);

const error = handleActions({
    [getShowRequest]: () => null, 
    [getShowFailure]: (_state, action) => action.payload
}, null);

export default combineReducers({
    data,
    isLoading,
    error
});

export const getData = state => state.shows.data;
export const getIsloading = state => state.shows.isLoading;
export const getError = state => state.shows.error