import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {createSelector} from 'reselect';
import {showRequest, showSuccess, showFailure} from '../actions/showActions';

export const getLoading = state => state.isLoading;
export const getError = state => state.error;
export const getShowDescription = createSelector(
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


const data = handleActions(
    {
      [showSuccess]: (state, action) => action.payload
    },
    null
);
  
const error = handleActions(
    {
      [showSuccess]: () => null,
      [showFailure]: (state, action) => action.payload
    },
    null
);
  
const isLoading = handleActions(
    {
      [showRequest]: () => true,
      [showSuccess]: () => false,
      [showFailure]: () => false
    },
    false
);
  
export default combineReducers({
    data,
    error,
    isLoading
});
  