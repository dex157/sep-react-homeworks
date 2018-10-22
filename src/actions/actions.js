import { createAction } from 'redux-actions';

export const fetchSearchRequest = createAction('SEARCH_REQUEST');
export const fetchSearchSuccess = createAction('SEARCH_SUCCESS');
export const fetchSearchFailure = createAction('SEARCH_FAILURE');

export const fetchShowRequest = createAction('SHOW_REQUEST');
export const fetchShowSuccess = createAction('SHOW_SUCCESS');
export const fetchShowFailure = createAction('SHOW_FAILURE');