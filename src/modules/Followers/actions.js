import { createAction } from 'redux-actions';

export const fetchRequest = createAction("FOLLOWERS_FETCH_REQUEST");
export const fetchSuccess = createAction("FOLLOWERS_FETCH_SUCCESS");
export const fetchFailure = createAction("FOLLOWERS_FETCH_FAILURE");
