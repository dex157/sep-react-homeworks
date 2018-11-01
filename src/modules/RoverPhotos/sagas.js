import { all, select, put, call, takeEvery, fork } from 'redux-saga/effects';
import { getPhotos } from './api';
import { getApiKey } from '../Auth';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';
import { getPhotosExist } from './selectors';
import rovers from '../../rovers';

function* fetchPhotosWatcher() {
  yield takeEvery(fetchPhotosRequest, fetchPhotosFlow);
}

function* fetchPhotosFlow(action) {
  const { name, sol } = action.payload;
  const key = yield select(getApiKey);
  try {
    console.log('fetchPhotosFlow');
    const data = yield call(getPhotos, key, name, sol);
    yield put(fetchPhotosSuccess({ name, sol, photos: data.photos }));
  } catch (error) {
    yield put(fetchPhotosFailure({ name, sol, error: {} }));
  }
}

function* changeSolWatcher() {
  yield takeEvery(changeSol, changeSolFlow);
}

function* changeSolFlow(action) {
  const sol = action.payload;
  const key = yield select(getApiKey);
  const flag = yield select(getPhotosExist, rovers[0], sol);
  if (flag === false) {
    console.log('changeSolFlow->put(fetchPhotosRequest)');
    try {
      yield all([
        put(fetchPhotosRequest({ key, name: rovers[0], sol })),
        put(fetchPhotosRequest({ key, name: rovers[1], sol })),
        put(fetchPhotosRequest({ key, name: rovers[2], sol }))
      ]);
    } catch (error) {
      yield all([
        put(fetchPhotosFailure({ name: rovers[0], sol, error: {} })),
        put(fetchPhotosFailure({ name: rovers[1], sol, error: {} })),
        put(fetchPhotosFailure({ name: rovers[2], sol, error: {} }))
      ]);
    }
  }
}

export default function*() {
  yield fork(fetchPhotosWatcher);
  yield fork(changeSolWatcher);
}
