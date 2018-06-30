import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromNews from './news.reducer';

export interface State {
  news: fromNews.NewsState;
}

export const reducers: ActionReducerMap<State> = {
  news: fromNews.reducer
};

export const getNewsState = createFeatureSelector<fromNews.NewsState>('news');
