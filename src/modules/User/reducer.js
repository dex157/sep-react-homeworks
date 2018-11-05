import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

const initialState = {
    data: null,
    isLoading: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case fetchRequest.toString():
            return {
                data: null,
                isLoading: true,
                error: false
            }
        case fetchSuccess.toString():
            // console.log(action, state);
            return {
                data: action.payload,
                isLoading: false,
                error: false
            }
        case fetchFailure.toString():
            return {
                data: null,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}
export const getUser = state => state.user.data;
export const getIsLoading = state => state.user.isLoading;
export const getError = state => state.user.error;