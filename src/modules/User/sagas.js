import { fetchRequest, fetchSuccess, fetchFailure} from './actions'
import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getUserInfo } from './api';
import { getApiKey } from '../Auth'


function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey)
  try {
    const response = yield call(getUserInfo, apiKey, action.payload)
    yield put(fetchSuccess(response))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
