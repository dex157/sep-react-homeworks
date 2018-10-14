import { takeLatest, select, put, call, fork } from 'redux-saga/effects';


function* fetchFollowersWatcher() {
  yield takeLatest(?, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
