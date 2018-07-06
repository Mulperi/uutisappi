import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromNews from '../../store/selectors/news.selectors';
import * as newsActions from '../../store/actions/news.actions';
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  articles$: Observable<any>;
  loadingArticles$: Observable<any>;
  constructor(private store: Store<fromStore.State>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select(fromNews.getNews);
    this.loadingArticles$ = this.store.select(fromNews.getLoading);
  }
}
