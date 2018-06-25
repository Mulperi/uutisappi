import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<string[]>(environment.newsAPI);
  }
}
