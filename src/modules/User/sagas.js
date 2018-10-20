import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getUserInfo } from './api';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure
} from './actions';
import { getApiKey } from '../Auth/selectors';


function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const state = yield select(getApiKey);

  try {
    const response = yield call(getUserInfo, state, action.payload);
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
