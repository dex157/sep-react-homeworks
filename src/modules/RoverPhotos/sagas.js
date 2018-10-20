import { takeEvery, select, put, call, fork } from 'redux-saga/effects';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';
import { getApiKey } from '../Auth';
import { getPhotos } from './api';
import rovers from '../../utils/rovers';
import { getPhotos as getSavedPhotos } from './RoverPhotos';

function* fetchRoverWatcher() {
  yield takeEvery(fetchPhotosRequest, fetchPhotoFlow);
}

function* changeSolWatcher() {
  yield takeEvery(changeSol, changeSolFlow);
}

function* changeSolFlow(action) {
  for (let roverName of rovers) {
    let SavedPhotos = yield select(getSavedPhotos, roverName, action.payload);

    if (SavedPhotos) {
      continue;
    }
    yield put(fetchPhotosRequest({ name: roverName, sol: action.payload }));
  }
}

function* fetchPhotoFlow(action) {
  try {
    const { sol, name: roverName } = action.payload;
    const apiKey = yield select(getApiKey);
    const res = yield call(getPhotos, apiKey, roverName, sol);

    yield put(fetchPhotosSuccess({ name: roverName, sol, photos: res.photos }));
  } catch (e) {
    const { sol, name: roverName } = action.payload;

    yield call(handleErrors, e, roverName, sol);
  }
}
function* handleErrors(e, roverName, id) {
  console.log(e);
  switch (e.statusText) {
    case 'Forbidden':
      yield put(
        fetchPhotosFailure({
          name: roverName,
          sol: id,
          error: 'некоректный ключ'
        })
      );

      return;
    default:
      yield put(
        fetchPhotosFailure({ name: roverName, sol: id, error: e.statusText })
      );
  }
}
export default function*() {
  yield fork(fetchRoverWatcher);
  yield fork(changeSolWatcher);
}
