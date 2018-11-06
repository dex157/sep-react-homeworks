import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';
import { getFollowersInfo } from './api';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey);

  try {
    const data = yield call(getFollowersInfo, apiKey, action.payload);
    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
