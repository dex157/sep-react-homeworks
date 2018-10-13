import {search} from '../api';
import {
    searchRequest,
    searchSuccsess,
    searchFailure
} from '../actionCreators/searchAction';


export const searchMiddleware = store => next => action => {
    if(action.type === searchRequest.toString()) {
        search(action.payload)
        .then(result => {
            store.dispatch(searchSuccsess(result));
        })
        .catch(error => {
            store.dispatch(searchFailure(error));
        })
    }     

    return next(action);
}