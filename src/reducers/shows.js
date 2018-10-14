import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import {
  getShowRequest,
  getShowSuccess,
  getShowFailure
} from '../actions/show';

const data = handleActions(
  {
    [getShowSuccess]: (_, action) => action.payload
  },
  null
);

const error = handleActions(
  {
    [getShowSuccess]: () => null,
    [getShowFailure]: (_, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [getShowRequest]: () => true,
    [getShowSuccess]: () => false,
    [getShowFailure]: () => false
  },
  false
);

export default combineReducers({
  data,
  error,
  isLoading
});

export const getLoading = state => state.isLoading;
export const getError = state => state.error;
export const getInfo = createSelector(
  state => state.data,
  show => {
    if (!show) {
      return show;
    }
    const {
      id,
      image,
      summary,
      name,
      _embedded: { cast }
    } = show;
    const persons = cast.map(({ person: { image, name, id } }) => ({
      image,
      name,
      id
    }));
    return { id, name, image, summary, cast: persons };
  }
);
