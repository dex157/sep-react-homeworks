import { search, show } from '../api';
import { searchRequest, searchSuccess, searchFail } from '../reducers/search';
import { showRequest, showSuccess, showFail } from '../reducers/shows';

const searchMiddleware = store => next => action => {
    const { payload } = action;

    if (action.type === searchRequest.toString()) {
        const result = search(payload);
        result.then(responce => {
            store.dispatch(searchSuccess(responce));
        },
        error => {
            store.dispatch(searchFail(error));
        });
    }
    
    if (action.type === showRequest.toString()) {
        const show_result = show(payload);

        show_result.then(responce => {
            store.dispatch(showSuccess(responce));
        },
        error => {
            store.dispatch(showFail(error));
        });
    }

    return next(action);
}

export default searchMiddleware;