import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth from './Auth';
import roverPhotos, { sagas as roverSagas } from './RoverPhotos';

export default combineReducers({ auth, roverPhotos });

export function* rootSaga() {
  yield fork(roverSagas);
}
