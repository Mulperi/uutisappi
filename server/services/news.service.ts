import { Observable, from } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import * as rp from 'request-promise';
import * as cheerio from 'cheerio';

export default class NewsService {
  articles: string[] = [];
  constructor() {}

  public getNews(): Observable<any> {
    console.log('Getting news...');
    let articles = [];
    let options = {
      uri: `https://yle.fi/uutiset/tuoreimmat`,
      transform: body => {
        return cheerio.load(body);
      }
    };
    return from(rp(options)).pipe(
      flatMap(($: any) => {
        return this.sortArticles($).pipe(
          map((article: any) => article.children[0].data)
        );
      })
    );
  }

  sortArticles($: any) {
    let articles = [];
    return from(
      $('h1.yle__article__listItem__title').each((i, item) => {
        return item;
      })
    );
  }
}
