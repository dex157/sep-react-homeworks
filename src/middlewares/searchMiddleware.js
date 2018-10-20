import { searchRequest, searchSuccess, searchFailure } from '../actions';
import { search } from '../api';

export const searchMiddleware = store => next => action => {
    if (action.type === searchRequest.toString())
        search(action.payload)
            .then(series => {
                store.dispatch(searchSuccess(series));
            })
            .catch(error => {
                store.dispatch(searchFailure(error));
            });
    return next(action);
};
