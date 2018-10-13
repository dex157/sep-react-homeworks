import {showRequest, showSuccess, showFailure} from '../actions/showActions';
import {show} from '../api';

export default ({ dispatch }) => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(show => {
        dispatch(showSuccess(show));
      })
      .catch(() => {
        dispatch(showFailure('Oшибка, попробуйте снова'));
      });
  }
  return next(action);
};