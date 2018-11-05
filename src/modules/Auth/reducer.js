import { addApiKey } from './actions';

const InitialState = {
    apiKey: null,
    isAuthorized: false
}
export default (state = InitialState, action) => {
    switch (action.type) {
        case addApiKey.toString():
            return {
                apiKey: action.payload,
                isAuthorized: true
            }
        default:
            return state
    }
}
export const getIsAuthorized = state => state.auth.isAuthorized;
export const getApiKey = state => state.auth.apiKey;