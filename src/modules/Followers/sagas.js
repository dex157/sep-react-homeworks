import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth/reducer';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey);
  try {
    const followers = yield call(getFollowersInfo, apiKey, action.payload);
    yield put(fetchSuccess(followers));
  } catch (e) {
    yield put(fetchFailure(e));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
