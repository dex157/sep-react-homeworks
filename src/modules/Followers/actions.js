import { createAction } from 'redux-actions';

export const fetchRequest = createAction('FOLLOWERS/FETCH_REQUEST');
export const fetchSuccess = createAction('FOLLOWERS/FETCH_SUCCESS');
export const fetchFailure = createAction('FOLLOWERS/FETCH_FAILURE');
