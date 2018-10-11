import { searchRequest, searchSuccess, searchFailure } from './actions';
import { search } from '../../api';

export const searchSeries = store => next => action => {
  console.log('store',store);
  console.log('next', next);
  console.log('action', searchRequest);
  if (action.type === searchRequest.toString()) {
    search('13').then(data => store.dispatch(searchSuccess(data)));
  }
  // return next(action);
};
