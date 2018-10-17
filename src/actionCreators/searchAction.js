import {createAction} from 'redux-actions';

export const changeSearchInputValue = createAction('CHANGE_SEARCH_INPUT_VALUE');
export const searchRequest = createAction('SEARCH_REQUEST');
export const searchSuccsess = createAction('SEARCH_SUCCESS');
export const searchFailure = createAction('SEARCH_FAILURE');