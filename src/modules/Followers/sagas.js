import { takeLatest, select, put, call, cancelled, fork } from 'redux-saga/effects';
import * as api from './api';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions';


function* fetchFollowersWatcher() {
  yield takeLatest('', fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const state = yield select();
  console.log(state);
  yield cancelled();
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
