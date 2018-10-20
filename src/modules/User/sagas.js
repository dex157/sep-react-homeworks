import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth/reducer'
import { getUserInfo } from './api';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  try {
    const key = yield select(getApiKey);
    const response = yield call(getUserInfo, key, action.payload);
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
