import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { 
    getSearchRequest, 
    getSearchSuccess, 
    getSearchFailure 
} from '../actions'

const data = handleActions({
    [getSearchRequest]: () => [], 
    [getSearchSuccess]: (_state, action) => action.payload
}, []);

const isLoading = handleActions({
    [getSearchRequest]: () => false, 
    [getSearchSuccess]: () => true,
    [getSearchFailure]: () => true
}, true);

const error = handleActions({
    [getSearchRequest]: () => null, 
    [getSearchFailure]: (_state, action) => action.payload
}, null);

export default combineReducers({
    data,
    isLoading,
    error
});

export const getData = createSelector(
    state => state.search.data,
    data => data.map(({ id, name, image, summary }) => 
        ({ 
            id,
            name, 
            image: image ? image.medium : image,
            summary
        })) 
);
export const getIsloading = state => state.search.isLoading;
export const getError = state => state.search.error