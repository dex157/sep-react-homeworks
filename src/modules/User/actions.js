import { createAction } from 'redux-actions';

export const fetchRequest = createAction('USERS_FETCH_REQUEST');
export const fetchSuccess = createAction('USERS_FETCH_SUCCESS');
export const fetchFailure = createAction('USERS_FETCH_FAILURE');