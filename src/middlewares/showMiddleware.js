import { 
    getShowRequest,
    getShowSuccess,
    getShowFailure
} from '../actions'
import { show } from '../api'

const showMiddleware = store => next => action => {
    if(action.type === getShowRequest.toString()) {
        show(action.payload)
            .then(response => {
                store.dispatch(getShowSuccess(response))
            })
            .catch(error => {
                store.dispatch(getShowFailure(error))
            });
    }

    return next(action)
}

export default showMiddleware