import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getFollowersInfo } from './api'
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const state = yield select(getApiKey);

  try {
    const response = yield call(getFollowersInfo, state, action.payload);
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
