import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import * as fromWeather from '../store/selectors/weather.selectors';

import * as weatherActions from '../store/actions/weather.actions';
import * as moviesActions from '../store/actions/movies.actions';
import * as newsActions from '../store/actions/news.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadingWeather$: Observable<any>;
  weather$: Observable<any>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit(): void {
    this.weather$ = this.store.select(fromWeather.getWeather);
    this.loadingWeather$ = this.store.select(fromWeather.getLoading);
    this.getLocation();

    this.store.dispatch(new moviesActions.MoviesLoad());
    this.store.dispatch(new newsActions.NewsLoad());
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        // console.log(position.coords);
        this.store.dispatch(new weatherActions.WeatherLoad(position.coords));
      });
    } else {
      console.log('location not allowed');
    }
  }
}
