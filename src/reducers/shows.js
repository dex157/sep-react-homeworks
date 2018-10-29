import {
    getSeriesRequest,
    getSeriesSuccsess,
    getSeriesFailure
} from '../actionCreators/showAction';

const showsInitialState={
    data: [],
    isLoading: true,
    error: null,
}

const shows = (state = showsInitialState, action) => {
    switch(action.type) {
        case getSeriesRequest.toString():
            return {
                ...state,
                isLoading: true,
                id: action.payload
            }
        case getSeriesSuccsess.toString():
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
            }
        case getSeriesFailure.toString():
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    default:
        return state;
    }
} 


export default shows;