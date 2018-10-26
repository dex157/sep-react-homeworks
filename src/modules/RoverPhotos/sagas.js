import { takeEvery, select, put, call } from 'redux-saga/effects';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure} from './actions'
import { getPhotos } from './api'
import { getApiKey } from '../Auth';

export function* fetchPhotoFlow(action) {
  const apiKey = yield select(getApiKey)

  const {name, sol} = action.payload;
  try {
    const response = yield call(getPhotos, apiKey, name, sol)
    yield put(fetchPhotosSuccess({
      name,
      sol,
      photos: response.photos.map(el => ({
        id: el.id,
        img_src: el.img_src,
        camera: el.camera
      }))
    }))
  } catch (error) {
    yield put(fetchPhotosFailure({
      name,
      sol,
      error
    }))
  }
}

export default function*() {
  yield takeEvery(fetchPhotosRequest, fetchPhotoFlow);
}