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
export const getFollowers = state => state.followers.data;
export const getIsLoading = state => state.followers.isLoading;
export const getError = state => state.followers.error;