import { getMovies } from '../reducers/movies.reducer';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import * as moviesActions from '../actions/movies.actions';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

  @Effect()
  MoviesLoad$ = this.actions$.ofType(moviesActions.MOVIES_LOAD).pipe(
    concatMap((action: moviesActions.MoviesLoad) => {
      return this.moviesService.getMovies();
    }),
    map(movies => {
      return new moviesActions.MoviesLoadSuccess(movies);
    })
    // catchError((error: any) => {
    //   return console.log(error);
    //   // return of(new newsActions.NewsLoadError(error));
    // })
  );
}
