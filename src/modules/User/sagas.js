import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getUserInfo } from './api';
import { fetchSuccess } from './actions';
import { getApiKey } from "../Auth";

function* fetchUserWatcher() {
  yield takeLatest('USER/FETCH_REQUEST', fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey);
  try {
    const data = yield call(getUserInfo, apiKey, action.payload);
    yield put(fetchSuccess(data));
  } catch (error) {
    console.error('function* fetchUserFlow()', error);
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
