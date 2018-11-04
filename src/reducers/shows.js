import { createAction, handleActions } from 'redux-actions';

const initialState = {
    isFetching: false,
    entities: [],
    error: '',
};


export const showRequest = createAction('SHOW_REQUEST');
export const showSuccess =  createAction('SHOW_SUCCESS');
export const showFail = createAction('SHOW_FAIL');

const shows = handleActions({
    [showRequest](state, { payload }) {
        return { ...state, isFetching: true};
    },
    [showSuccess](state, { payload })  {
        return { ...state, isFetching: false, entities: [ ...state.entities, payload]};
    },
    [showFail](state, { payload }) {
        return { ...state, isFetching: false, error: payload.message};
    }

}, initialState);

export default shows;
