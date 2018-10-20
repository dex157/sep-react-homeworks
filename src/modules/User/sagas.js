import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getUserInfo } from './api';
import { getApiKey } from '../Auth/reducer';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey);
  try {
    const user = yield call(getUserInfo, apiKey, action.payload);
    yield put(fetchSuccess(user));
  } catch (e) {
    yield put(fetchFailure(e));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
