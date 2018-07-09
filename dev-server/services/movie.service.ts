import { Observable, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import * as rp from 'request-promise';
import * as cheerio from 'cheerio';

export default class NewsService {
  constructor() {}

  public getMovies(): Observable<any> {
    console.log('Getting movies...');
    let options = {
      uri: `https://www.finnkino.fi/xml/Schedule/`,
      transform: body => {
        return cheerio.load(body, { xmlMode: true });
      }
    };

    return from(rp(options)).pipe(
      concatMap($ => {
        return $('Show').map(function(i, elem) {
          return {
            title: $(this)
              .find('Title')
              .text(),
            original_title: $(this)
              .find('OriginalTitle')
              .text(),
            genre: $(this)
              .find('Genres')
              .text(),
            link: $(this)
              .find('ShowURL')
              .text(),
            source: 'Finnkino'
          };
        });
      })
    );
  }
}
