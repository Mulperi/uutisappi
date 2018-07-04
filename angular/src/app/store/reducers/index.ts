import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromNews from './news.reducer';
import * as fromWeather from './weather.reducer';

export interface State {
  news: fromNews.NewsState;
  weather: fromWeather.WeatherState;
}

export const reducers: ActionReducerMap<State> = {
  news: fromNews.reducer,
  weather: fromWeather.reducer
};

export const getNewsState = createFeatureSelector<fromNews.NewsState>('news');
export const getWeatherState = createFeatureSelector<fromWeather.WeatherState>(
  'weather'
);
