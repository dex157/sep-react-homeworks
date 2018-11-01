import { createAction } from 'redux-actions';

export const fetchRequest = createAction('FOLLOWERS_REQUEST');
export const fetchSuccess = createAction('FOLLOWERS_SUCCESS');
export const fetchFailure = createAction('FOLLOWERS_FAILURE');
