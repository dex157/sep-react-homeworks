import { createAction } from 'redux-actions'

export const getSearchRequest = createAction("SEARCH_REQUEST")
export const getSearchSuccess = createAction("SEARCH_SUCCESS")
export const getSearchFailure = createAction("SEARCH_FAILURE")

export const getShowRequest = createAction("SHOW_REQUEST")
export const getShowSuccess = createAction("SHOW_SUCCESS")
export const getShowFailure = createAction("SHOW_FAILURE")