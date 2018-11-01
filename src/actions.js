import { createAction } from 'redux-actions';

export const searchRequest = createAction('SEARCH_REQUEST');
export const searchSuccess = createAction('SEARCH_SUCCESS');
export const searchFailure = createAction('SEARCH_FAILURE');

export const showRequest = createAction('SHOW_REQUEST');
export const showSuccess = createAction('SHOW_SUCCESS');
export const showFailure = createAction('SHOW_FAILURE');
