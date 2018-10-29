import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getFollowersInfo } from './api';
import { fetchSuccess } from "./actions";
import { getApiKey } from "../Auth";

function* fetchFollowersWatcher() {
  yield takeLatest('FOLLOWERS/FETCH_REQUEST', fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey);
  try {
    const data = yield call(getFollowersInfo, apiKey, action.payload);
    yield put(fetchSuccess(data));
  } catch (error) {
    console.error('function* fetchFollowersFlow()', error);
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
