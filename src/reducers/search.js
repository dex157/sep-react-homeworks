import { createSelector } from 'reselect';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case searchRequest.toString():
      return {
        data: [],
        isLoading: true,
        error: null,
      }
      case searchSuccess.toString():
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      }
      case searchFailure.toString():
      return {
        data: [],
        isLoading: false,
        error: true,
      }
    default:
      return state;
  }
};

export const getLoading = state => state.isLoading;
export const getError = state => state.error;
export const getData = createSelector(
  state => state.data,
  shows =>
    shows.map(({ id, image, summary, name }) => ({ id, image, summary, name }))
);