import { takeEvery, select, put, call, fork } from 'redux-saga/effects';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';
import { getApiKey } from '../Auth';
import { getPhotos } from './api';
import { getSavedPhotos } from './RoverPhotos';
import { rovers } from '../../constants/rovers';

function* changeSolWatcher() {
  yield takeEvery(changeSol, changeSolFlow);
}

function* changeSolFlow(action) {
  for (let rover of rovers) {
    let SavedPhotos = yield select(getSavedPhotos, rover, action.payload);
    if (!SavedPhotos) {
      yield put(fetchPhotosRequest({ rover, sol: action.payload }));
    }
  }
}

function* fetchPhotosWatcher() {
  yield takeEvery(fetchPhotosRequest, fetchPhotosFlow);
}

function* fetchPhotosFlow(action) {
  const { rover, sol } = action.payload;
  try {
    const key = yield select(getApiKey);
    const response = yield call(getPhotos, key, rover, sol);
    yield put(fetchPhotosSuccess({sol, name: rover, photos: response.photos}));
  } catch (error) {
    yield put(fetchPhotosFailure(sol, rover, error));
  }
}

export default function*() {
  yield fork(changeSolWatcher);
  yield fork(fetchPhotosWatcher);
}
