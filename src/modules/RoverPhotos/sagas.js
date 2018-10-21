import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { 
    fetchPhotosRequest,
    fetchPhotosSuccess,
    fetchPhotosFailure
} from './actions';
import { getPhotos } from './api';
import { getApiKey } from '../Auth';

function* fetchPhotos() {
    yield takeLatest(fetchPhotosRequest, fetchPhotosFlow);
}
  
export function* fetchPhotosFlow(action) {
    //console.log(action);
    const { name, sol } = action.payload;
  
    try {
        const state = yield select(getApiKey);
        const response = yield call(getPhotos, state, name, sol);
        yield put(fetchPhotosSuccess({sol: sol, name: name, photos: response.photos}));
    } catch (error) {
        yield put(fetchPhotosFailure({sol: sol, name: name, error: error.status}));
    }
}
  
export default function*() {
    yield fork(fetchPhotos);
}