import {createAction} from 'redux-actions';

export const getSeriesRequest = createAction('GET_SERIES_REQUEST');
export const getSeriesSuccsess = createAction('GET_SERIES_SUCCESS');
export const getSeriesFailure = createAction('GET_SERIES_FAILURE');