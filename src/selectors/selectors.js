import { createSelector } from 'reselect';

export const getIsLoading = state => state.serials.isLoading;
export const getError = state => state.serials.error;
export const getSerials = createSelector(
  
);