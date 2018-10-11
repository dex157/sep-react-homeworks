import { showRequest, showSuccess, showFailure } from './actions';
import { show } from '../../api';

export const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
        show(action.payload)
          .then(data => {
            store.dispatch(showSuccess(data));
          })
          .catch(error => {
            store.dispatch(showFailure(error));
          });
      }
  return next(action);
};
