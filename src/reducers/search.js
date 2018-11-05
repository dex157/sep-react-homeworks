import { searchRequest, searchSuccess, searchFailure } from '../actions/search';
import { handleActions } from 'redux-actions';

export default handleActions(
  {
      [searchRequest]: state => ({ ...state, isFetching: true }),
  
      [searchSuccess]: (state, action) => ({
        ...state,
        isFetching: false,
        result: action.payload,        
      }),
  
      [searchFailure]: (state, action) => ({
        ...state,
        isFetching: false,
        error: action.error,
      }),
  },
  {
      isFetching: false, 
      result: [], 
      error: null
  },
);