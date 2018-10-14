import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getUserInfo } from './api';
import { 
    fetchRequest,
    fetchSuccess,
    fetchFailure
} from './actions';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const state = yield select();

  try {
    const response = yield call(getUserInfo, action.payload, state.auth.key);
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
