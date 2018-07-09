import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromNews from '../reducers/news.reducer';

export const getLoading = createSelector(
  fromFeature.getNewsState,
  fromNews.isLoading
);

export const getNews = createSelector(
  fromFeature.getNewsState,
  fromNews.getNews
);
