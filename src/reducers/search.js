import { createAction, handleActions } from 'redux-actions';

const initialState = {
    isFetching: false,
    result: [],
    error: null,
};

export const searchRequest = createAction('SEARCH_REQUEST');
export const searchSuccess =  createAction('SEARCH_SUCCESS');
export const searchFail = createAction('SEARCH_FAIL');

const search = handleActions({
    [searchRequest](state, { payload }) {
        return ({ ...state, isFetching: true});
    },
    [searchSuccess](state, { payload }) {
        return ({
            ...state,
            isFetching: false,
            result: payload,
        });
    },
    [searchFail](state, {payload}){
        return ({
            ...state,
            isFetching: false,
            error: payload.message
        })
    }
}, initialState);

export default search;