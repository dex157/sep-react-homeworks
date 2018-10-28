import { showRequest, showSuccess, showFailure } from '../actions/show';
import { handleActions } from 'redux-actions';

export default handleActions(
  {
      [showRequest]: state => ({ ...state, isFetching: true }),
  
      [showSuccess]: (state, action) => ({
        ...state,
        isFetching: false,
        result: action.payload,        
      }),
  
      [showFailure]: (state, action) => ({
        ...state,
        isFetching: false,
        error: action.error,
      }),
  },
  {
      isFetching: false, 
      result: null, 
      error: null
  },
);