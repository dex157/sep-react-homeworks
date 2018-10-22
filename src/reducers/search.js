import {
  handleActions
} from 'redux-actions';
import {
  combineReducers
} from 'redux';
import {
  fetchShowRequest,
  fetchShowSuccess,
  fetchShowFailure
} from '../actions/actions';

const elements = handleActions(
  {
    [fetchShowRequest]: () => [],
    [fetchShowSuccess]: (_state, action) => action.payload,
  },
  []
)

const isLoading = handleActions(
  {
    [fetchShowRequest]: () => true,
    [fetchShowSuccess]: () => false,
    [fetchShowFailure]: () => false,
  },
  false
)

export default combineReducers({
  elements,
  isLoading,
})

// const initialState = {
//   elements: [],
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case fetchShowRequest.toString():
//     return {
//       ...state,
//       elements: [],
//     };
    
//     case fetchShowSuccess.toString():
//     // console.log(action.payload)
//     return {
//         ...state,
//         elements: action.payload,
//       };

// //     case fetchSeriesFailure.toString():
// //       return {
// //         ...state,
// //         error: action.payload,
// //         isLoading: false,
// //       };

//     default:
//       return state;
//   }
// };