import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import * as api from './api';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest.toString(), fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  try {
    const { getFollowersInfo } = api;
    const username = action.payload;

    const apiKey = yield select(getApiKey);
    const response = yield call(getFollowersInfo, apiKey, username);
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
