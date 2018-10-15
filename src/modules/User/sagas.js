import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import * as api from './api';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions';
import { getApiKey } from '../Auth';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest.toString(), fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const {getUserInfo} = api;
  let apiKey;
  const username = action.payload;
  yield apiKey = select(getApiKey);
  try {
    const response = yield call(getUserInfo, apiKey, username);
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error));
  } 
}

export default function*() {
  yield fork(fetchUserWatcher);
}
