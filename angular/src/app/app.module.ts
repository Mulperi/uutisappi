import { MoviesPageComponent } from './containers/movies-page/movies-page.component';
import { NewsPageComponent } from './containers/news-page/news-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './services/weather.service';
import { NewsService } from './services/news.service';
import { MoviesService } from './services/movies.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { AppComponent } from './containers/app.component';
import { components } from './components';
import { containers } from './containers';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

const appRoutes: Routes = [
  { path: 'news', component: NewsPageComponent },
  { path: 'movies', component: MoviesPageComponent },
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/news' }
];

@NgModule({
  declarations: [AppComponent, ...components, ...containers],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [NewsService, WeatherService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
