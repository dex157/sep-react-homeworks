import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';
import { getFollowersInfo } from './api';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  try {
    const apiKey = yield select(getApiKey);
    const followers = yield call(getFollowersInfo, apiKey, action.payload);

    yield put(fetchSuccess(followers));
  } catch (e) {
    yield call(handleErrors, e);
  }
}
function* handleErrors(e) {
  switch (e.message) {
    case 'Not Found':
      yield put(fetchFailure('Информация о подписчиках не найдена'));
      return;
    case 'Unauthorized':
      yield put(fetchFailure('Некоректный ключ'));
      return;
    default:
      yield put(fetchFailure(e.message));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
