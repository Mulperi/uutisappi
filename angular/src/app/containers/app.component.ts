import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromNews from '../store/selectors/news.selectors';
import * as fromWeather from '../store/selectors/weather.selectors';
import * as newsActions from '../store/actions/news.actions';
import * as weatherActions from '../store/actions/weather.actions';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  articles$: Observable<any>;
  loadingArticles$: Observable<any>;
  weather$: Observable<any>;

  constructor(
    private weatherService: WeatherService,
    private store: Store<fromStore.State>
  ) {}

  ngOnInit(): void {
    this.articles$ = this.store.select(fromNews.getNews);
    this.store.select(fromWeather.getWeather).subscribe(data => {
      console.log(data);
    });
    this.loadingArticles$ = this.store.select(fromNews.getLoading);
    this.store.dispatch(new newsActions.NewsLoad());
    this.getLocation();
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        console.log(position.coords);
        this.store.dispatch(new weatherActions.WeatherLoad(position.coords));
        // this.store.select(fromWeather.getWeather).subscribe(
        //   (data: any) => {
        //     this.weather = {
        //       summary: data.currently.summary,
        //       temp: ((data.currently.temperature - 32) * 5) / 9
        //     };
        //   },
        //   error => console.log(error)
        // );
      });
    } else {
      console.log('location not allowed');
    }
  }
}
