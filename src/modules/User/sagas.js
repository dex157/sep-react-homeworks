import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';
import { getUserInfo } from './api';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey);

  try {
    const data = yield call(getUserInfo, apiKey, action.payload);
    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}