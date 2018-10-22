import { createAction } from 'redux-actions';

export const fetchShowRequest = createAction('FETCH_SHOW_REQUEST');
export const fetchShowSuccess = createAction('FETCH_SHOW_SUCCESS');
export const fetchShowFailure = createAction('FETCH_SHOW_FAILURE');