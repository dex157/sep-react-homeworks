import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import * as api from './api';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions';
import { getApiKey } from '../Auth';


function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest.toString(), fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const {getFollowersInfo} = api;
  let apiKey;
  const username = action.payload;
  yield apiKey = select(getApiKey);
  try {
    const response = yield call(getFollowersInfo, apiKey, username);
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error));
  } 
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
