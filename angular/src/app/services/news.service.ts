import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    // Initial value after 0ms delay, 30 secs interval after that
    return timer(0, 30000).pipe(
      concatMap(() => this.http.get<string[]>(environment.newsAPI))
    );
  }
}
