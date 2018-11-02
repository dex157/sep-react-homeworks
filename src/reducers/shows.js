import {
    getShowRequest,
    getShowSuccess,
    getShowFailure
} from '../actions/show';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case getShowRequest.toString():
            return {
                data: [],
                isLoading: true,
                error: null,
            }
        case getShowSuccess.toString():
            let payload = (action.payload) ? action.payload : null;
            return {
                data: payload,
                isLoading: false,
                error: null,
            }
        case getShowFailure.toString():
            return {
                data: [],
                isLoading: false,
                error: true,
            }
        default:
            return state;
    }
};

export const getLoading = state => state.isLoading;
export const getError = state => state.error;
export const getInfo = state => state.data;
