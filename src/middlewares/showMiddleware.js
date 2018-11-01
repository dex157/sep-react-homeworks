import { show } from '../api';
import { showRequest, showSuccess, showFailure } from '../actions';

export default ({ dispatch }) => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(data => {
        dispatch(showSuccess(data));
      })
      .catch(() => {
        dispatch(showFailure('Oшибка, попробуйте снова'));
      });
  }
  return next(action);
};
