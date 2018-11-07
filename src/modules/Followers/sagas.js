import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getApiKey } from '../Auth';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getFollowersInfo } from './api';


function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  try{
    const apiKey = yield select(getApiKey);
    const responce = yield call(getFollowersInfo, apiKey, action.payload);
    yield put(fetchSuccess(responce));
  } catch {
    yield put(fetchFailure('followers fetch fail'));
  }

}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
