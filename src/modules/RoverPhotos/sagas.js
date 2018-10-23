import { takeEvery, select, put, call, fork } from 'redux-saga/effects';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure, changeSol } from './actions';
import { getSavedPhotos } from './selectors';
import { getPhotos } from './api';
import { getApiKey } from '../Auth';
import { rovers } from '../../rovers';

function* fetchPhotos() {
  yield takeEvery(fetchPhotosRequest, PhotosFlow);
}

export function* PhotosFlow(action) {
    const { name, sol } = action.payload;

    try {
        const state = yield select(getApiKey);
        const response = yield call(getPhotos, state, action.payload);
        yield put(fetchPhotosSuccess({sol: sol, name: name, photos: response.photos}));
    } catch (error) {
        yield put(fetchPhotosSuccess({sol: sol, name: name, error: error.status}));
    }
}

function* fetchSol() {
    yield takeEvery(changeSol, ChangeSolFlow);
}

export function* ChangeSolFlow(action) {
    for (let rover of rovers) {
        let SavedPhotos = yield select(getSavedPhotos, rover, action.payload);

        if (!SavedPhotos) {
            try {
                const state = yield select(getApiKey);
                const response = yield call(getPhotos, state, rover, action.payload);
                 yield put(fetchPhotosSuccess({sol: action.payload, name: rover, photos: response.photos}));
            } catch (error) {
                yield put(fetchPhotosFailure({sol: action.payload, name: rover, error: error.status}));
            }
        }
    }
}

export default function*() {
  yield fork(fetchPhotos);
  yield fork(fetchSol);
}