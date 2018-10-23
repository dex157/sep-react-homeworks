import { fetchRequest, fetchSuccess, fetchFailure} from './actions'
import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth'

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey)
  try {
    const response = yield call(getFollowersInfo, apiKey, action.payload)
    yield put(fetchSuccess(response))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
