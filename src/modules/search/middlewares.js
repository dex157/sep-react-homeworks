import { seriesRequest, seriesSuccess, seriesFailure } from './actions';
import { search } from '../../api';

export const searchMiddleware = store => next => action => {
    if (action.type === seriesRequest.toString()) {
        search(action.payload)
            .then(data => {
                store.dispatch(seriesSuccess(data));
            })
            .catch(error => {
                store.dispatch(seriesFailure(error));
            });
    }

    return next(action);
};