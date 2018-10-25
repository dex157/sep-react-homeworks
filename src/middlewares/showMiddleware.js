import {show} from '../api';
import {
    getSeriesRequest,
    getSeriesSuccsess,
    getSeriesFailure
} from '../actionCreators/showAction';

export const showMiddleware = store => next => action => {
    if(action.type === getSeriesRequest.toString()) {
        show(action.payload)
        .then(result => {
            store.dispatch(getSeriesSuccsess(result));
        })
        .catch(error => {
            store.dispatch(getSeriesFailure(error));
        })
    }       
    return next(action);
}