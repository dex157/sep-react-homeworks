import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

const initialState = {
    apiKey: null,
}

export const getApiKey = (state) => state.auth.apiKey;
export const getIsAuthorized = (state) => state.auth.apiKey ? true : false;

export default  handleActions({
    [addApiKey](state, { payload }){
        return { ...state, apiKey: payload };
    }
}, initialState);