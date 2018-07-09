import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return timer(0, 120000).pipe(
      concatMap(() => this.http.get<string[]>(environment.moviesAPI))
    );
  }
}
