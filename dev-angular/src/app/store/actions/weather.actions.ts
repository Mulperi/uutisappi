import { Action } from '@ngrx/store';

export const WEATHER_LOAD = '[Weather] Load';
export const WEATHER_LOAD_SUCCESS = '[Weather] Load Success';
export const WEATHER_FAILURE = '[Weather] Failure';
export const WEATHER_ERROR = '[Weather] Error';

export class WeatherLoad implements Action {
  readonly type = WEATHER_LOAD;
  constructor(public payload: any) {}
}

export class WeatherLoadSuccess implements Action {
  readonly type = WEATHER_LOAD_SUCCESS;
  constructor(public payload: any) {}
}

export type WeatherAction = WeatherLoad | WeatherLoadSuccess;
