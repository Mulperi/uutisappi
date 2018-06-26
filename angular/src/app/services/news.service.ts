import { HttpClient } from '@angular/common/http';
import { of, Observable, interval } from 'rxjs';
import { tap, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    // return interval(10000).pipe(
    //   concatMap(() => this.http.get<string[]>(environment.newsAPI))
    // );

    return this.http.get<string[]>(environment.newsAPI);
  }
}
