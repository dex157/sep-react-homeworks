import { takeEvery, select, put, call, fork } from 'redux-saga/effects';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';
import { getSavedPhotos, rovers } from './selectors';
import { getPhotos } from './api';
import { getApiKey } from '../Auth';

function* fetchPhotos() {
  yield takeEvery(fetchPhotosRequest, fetchPhotosFlow);
}

function* fetchChangeSol() {
  yield takeEvery(changeSol, fetchChangeSolFlow);
}

export function* fetchPhotosFlow(action) {
  const { name, sol } = action.payload;
  try {
    const state = yield select(getApiKey);
    const response = yield call(getPhotos, state, name, sol);
    yield put(
      fetchPhotosSuccess({ sol: sol, name: name, photos: response.photos })
    );
  } catch (error) {
    yield put(fetchPhotosFailure({ sol: sol, name: name }));
  }
}

export function* fetchChangeSolFlow(action) {
  for (let name of Object.keys(rovers)) {
    let SavedPhotos = yield select(getSavedPhotos, name, action.payload);
    if (SavedPhotos === null) {
      try {
        const state = yield select(getApiKey);
        const response = yield call(getPhotos, state, name, action.payload);
        yield put(
          fetchPhotosSuccess({
            sol: action.payload,
            name: name,
            photos: response.photos
          })
        );
      } catch (error) {
        yield put(
          fetchPhotosFailure({
            sol: action.payload,
            name: name
          })
        );
      }
    }
  }
}

export default function*() {
  yield fork(fetchPhotos);
  yield fork(fetchChangeSol);
}
