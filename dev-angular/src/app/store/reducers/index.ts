import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromNews from './news.reducer';
import * as fromWeather from './weather.reducer';
import * as fromMovies from './movies.reducer';

export interface State {
  news: fromNews.NewsState;
  weather: fromWeather.WeatherState;
  movies: fromMovies.MoviesState;
}

export const reducers: ActionReducerMap<State> = {
  news: fromNews.reducer,
  weather: fromWeather.reducer,
  movies: fromMovies.reducer
};

export const getNewsState = createFeatureSelector<fromNews.NewsState>('news');
export const getWeatherState = createFeatureSelector<fromWeather.WeatherState>(
  'weather'
);
export const getMoviesState = createFeatureSelector<fromMovies.MoviesState>(
  'movies'
);
