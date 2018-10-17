import {
    changeSearchInputValue,
    searchRequest,
    searchSuccsess,
    searchFailure
} from '../actionCreators/searchAction';

const searchInitialState={
    data: [],
    isLoading: false,
    error: null,
    searchValue: ''
}

const search = (state = searchInitialState, action) => {
    switch(action.type) {
        case changeSearchInputValue.toString():
            return {...state, searchValue: action.payload}
        case searchRequest.toString():
            return {...state, isLoading: true}
        case searchSuccsess.toString():
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
            }
        case searchFailure.toString():
            return {
                ...state,
                data: [],
                isLoading: false,
                error: action.payload
            }
    default:
        return state;
    }
} 


export default search;