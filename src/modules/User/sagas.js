import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import * as api from './api';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest.toString(), fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const { getUserInfo } = api;
  const username = action.payload;

  try {
    const apiKey = yield select(getApiKey);
    const response = yield call(getUserInfo, apiKey, username);
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
