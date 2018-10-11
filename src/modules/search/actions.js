import { createAction } from 'redux-actions';

export const searchRequest = createAction('SEARCH_REQUEST_REQUEST');
export const searchSuccess = createAction('SEARCH_REQUEST_SUCCESS');
export const searchFailure = createAction('SEARCH_REQUEST_FAILURE');
