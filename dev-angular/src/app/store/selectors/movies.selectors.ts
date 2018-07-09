import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromMovies from '../reducers/movies.reducer';

export const getLoading = createSelector(
  fromFeature.getMoviesState,
  fromMovies.isLoading
);

export const getMovies = createSelector(
  fromFeature.getMoviesState,
  fromMovies.getMovies
);
