import { Observable, from } from 'rxjs';
import { flatMap, map, concatMap } from 'rxjs/operators';
import * as rp from 'request-promise';
import * as cheerio from 'cheerio';

export default class NewsService {
  constructor() {}

  public getNews(): Observable<any> {
    console.log('Getting news...');
    let options = {
      uri: `https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET`,
      transform: body => {
        return cheerio.load(body, { xmlMode: true });
      }
    };

    return from(rp(options)).pipe(
      concatMap($ => {
        return $('item').map(function(i, elem) {
          return {
            title: $(this)
              .children()
              .first()
              .text(),
            link: $(this)
              .children()
              .eq(1)
              .text(),
            source: 'Yle Uutiset | Tuoreimmat uutiset',
            timestamp: $(this)
              .children()
              .eq(4)
              .text()
              .slice(5, 25)
          };
        });
      })
    );
  }
}
