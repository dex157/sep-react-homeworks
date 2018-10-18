import { createAction } from 'redux-actions';

export const changeSol = createAction('ROVER_PHOTOS/CHANGE_SOL');

export const fetchPhotosRequest = createAction(
  'ROVER_PHOTOS/FETCH_PHOTOS_REQUEST'
);
export const fetchPhotosSuccess = createAction(
  'ROVER_PHOTOS/FETCH_PHOTOS_SUCCESS'
);
export const fetchPhotosFailure = createAction(
  'ROVER_PHOTOS/FETCH_PHOTOS_FAILURE'
);
