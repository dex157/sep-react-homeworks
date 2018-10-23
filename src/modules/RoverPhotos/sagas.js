import { takeEvery, select, put, call, fork } from 'redux-saga/effects';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  changeSol
} from './actions';
import { getApiKey } from '../Auth';
import { getPhotos } from './api';
import rovers from '../../rovers/rovers';
import { getSavedPhotos } from './RoverPhotos';

function* fetchRoverPhotos() {
  yield takeEvery(fetchPhotosRequest, fetchPhotosFlow);
}

function* fetchRoverChangeSol() {
  yield takeEvery(changeSol, fetchChangeSolFlow);
}

function* fetchPhotosFlow(action) {
  try {
    const { name: rover, sol } = action.payload;
    const apiKey = yield select(getApiKey);
    const response = yield call(getPhotos, apiKey, rover, sol);

    yield put(
      fetchPhotosSuccess({ sol, name: rover, photos: response.photos })
    );
  } catch (error) {
    const { name: rover, sol } = action.payload;
    yield put(fetchPhotosFailure({ sol, rover, error: error.status }));
  }
}

function* fetchChangeSolFlow(action) {
  for (let roverName of rovers) {
    let SavedPhotos = yield select(getSavedPhotos, roverName, action.payload);

    if (SavedPhotos === null) {
      try {
        const apiKey = yield select(getApiKey);
        const response = yield call(
          getPhotos,
          apiKey,
          roverName,
          action.payload
        );

        yield put(
          fetchPhotosSuccess({
            sol: action.payload,
            name: roverName,
            photos: response.photos
          })
        );
      } catch (error) {
        yield put(
          fetchPhotosFailure({
            sol: action.payload,
            name: roverName,
            error: error.status
          })
        );
      }
    }
  }
}

export default function*() {
  yield fork(fetchRoverPhotos);
  yield fork(fetchRoverChangeSol);
}
