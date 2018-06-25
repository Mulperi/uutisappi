import { Component } from '@angular/core';
import { NewsService } from './services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Observable<any>;

  constructor(private newsService: NewsService) {
    this.articles = this.newsService.getArticles();
  }
}
