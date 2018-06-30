import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromNews from '../store/selectors/news.selectors';
import * as newsActions from '../store/actions/news.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  articles$: Observable<any>;

  constructor(
    private newsService: NewsService,
    private store: Store<fromStore.State>
  ) {}

  ngOnInit(): void {
    this.articles$ = this.store.select(fromNews.getNews);
    this.store.dispatch(new newsActions.NewsLoad());
  }
}
