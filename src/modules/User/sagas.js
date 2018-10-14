import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import * as api from './api';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions';


function* fetchUserWatcher() {
  yield takeLatest('', fetchUserFlow);
}

export function* fetchUserFlow(action) {

}

export default function*() {

}
