import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';
import { getUserInfo } from './api';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  try {
    const apiKey = yield select(getApiKey);
    const user = yield call(getUserInfo, apiKey, action.payload);

    yield put(fetchSuccess(user));
  } catch (e) {
    yield call(handleErrors, e);
  }
}

function* handleErrors(e) {
  switch (e.message) {
    case 'Not Found':
      yield put(fetchFailure('Информация о пользователе не найдена'));
      return;
    case 'Unauthorized':
      yield put(fetchFailure('Некоректный ключ'));
      return;
    default:
      yield put(fetchFailure(e.message));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
