import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromWeather from '../reducers/weather.reducer';

export const getLoading = createSelector(
  fromFeature.getWeatherState,
  fromWeather.isLoading
);

export const getWeather = createSelector(
  fromFeature.getWeatherState,
  fromWeather.getWeather
);
