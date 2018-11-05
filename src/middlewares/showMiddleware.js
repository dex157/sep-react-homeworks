import { show } from '../api';
import { showRequest, showSuccess, showFailure } from '../actions/show';

export default store => next => action => {
  const result = next(action);

  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(shows => store.dispatch(showSuccess(shows)))
      .catch(error => store.dispatch(showFailure(error)));
  }

  return result;
};