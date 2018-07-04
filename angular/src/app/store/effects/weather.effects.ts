import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { WeatherService } from '../../services/weather.service';
import * as weatherActions from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  @Effect()
  WeatherLoad$ = this.actions$.ofType(weatherActions.WEATHER_LOAD).pipe(
    concatMap((action: weatherActions.WeatherLoad) => {
      console.log('weather load');
      console.log(action.payload);
      return this.weatherService.getWeather(action.payload);
    }),
    map(weather => {
      console.log(weather);
      return new weatherActions.WeatherLoadSuccess(weather);
    })
    // catchError((error: any) => {
    //   return console.log(error);
    //   // return of(new newsActions.NewsLoadError(error));
    // })
  );
}
