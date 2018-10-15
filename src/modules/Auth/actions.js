import { createAction } from 'redux-actions';

export const addApiKey = createAction('AUTH/ADD_API_KEY');

export const getIsAuthorized = (state) => (
    state.auth.apiKey ? true : false
);

export const getApiKey = (state) => (
    state.auth.apiKey.toString()
);