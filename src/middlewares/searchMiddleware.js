import { 
    getSearchRequest, 
    getSearchSuccess, 
    getSearchFailure
} from '../actions'
import { search } from '../api'

const searchMiddleware = store => next => action => {
    if(action.type === getSearchRequest.toString()) {
        search(action.payload)
            .then(response => {
                store.dispatch(getSearchSuccess(response))
            })
            .catch(error => {
                store.dispatch(getSearchFailure(error))
            });
    }

    return next(action)
}

export default searchMiddleware