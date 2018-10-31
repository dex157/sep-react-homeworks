import { createAction } from 'redux-actions';

export const fetchRequest = createAction('USER_REQUEST');
export const fetchSuccess = createAction('USER_REQUEST_SUCCESS');
export const fetchFailure = createAction('USER_REQUEST_FAILURE');
