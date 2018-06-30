import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { NewsService } from '../../services/news.service';
import * as newsActions from '../actions/news.actions';

@Injectable()
export class NewsEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}

  @Effect()
  NewsLoad$ = this.actions$.ofType(newsActions.NEWS_LOAD).pipe(
    concatMap((action: newsActions.NewsLoad) => {
      return this.newsService.getArticles();
    }),
    map(news => {
      return new newsActions.NewsLoadSuccess(news);
    })
    // catchError((error: any) => {
    //   return console.log(error);
    //   // return of(new newsActions.NewsLoadError(error));
    // })
  );
}
