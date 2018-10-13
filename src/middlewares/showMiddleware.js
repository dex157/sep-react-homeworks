import { showRequest, showSucess, showFailure } from '../actions/showActions';
import { show } from '../api';

export default ({ dispatch }) => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(show => {
        dispatch(showSucess(show));
      })
      .catch(() => {
        dispatch(showFailure('сетевая ошибка, попробуйте снова'));
      });
  }
  return next(action);
};
