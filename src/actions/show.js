import { createActions } from 'redux-actions';

export const { showRequest, showSuccess, showFailure } = createActions({
  SHOW_REQUEST: undefined,
  SHOW_SUCCESS: undefined,
  SHOW_FAILURE: undefined,
});