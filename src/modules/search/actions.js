import { createAction } from 'redux-actions';

export const seriesRequest = createAction('SERIES_REQUEST');
export const seriesSuccess = createAction('SERIES_SUCCESS');
export const seriesFailure = createAction('SERIES_FAILURE');