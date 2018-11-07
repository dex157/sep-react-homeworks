import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

const initialState = {
    isLoading: false,
    data: null,
}

export const getIsLoading = (state) => state.followers.isLoading;
export const getData = (state) => state.followers.data;

export default handleActions({
    [fetchRequest](state, { payload }){
        return { ...state, isLoading: true };
    },
    [fetchSuccess](state, { payload }){
        return { ...state, isLoading: false, data: payload };
    },
    [fetchFailure](state, { payload }){
        return { ...state, isLoading: false, data: payload };
    }
}, initialState);

