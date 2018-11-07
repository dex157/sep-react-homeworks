import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';
import { getUserInfo} from './api';



function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  try { 
    const apiKey =  yield select(getApiKey);
    const responce = yield call(getUserInfo, apiKey, action.payload);
    yield put(fetchSuccess(responce));
  } catch {
    yield put(fetchFailure('fetching error'));
  }

}

export default function*() {
  yield fork(fetchUserWatcher);
}
