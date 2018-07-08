import { Observable, from } from 'rxjs';
import * as rp from 'request-promise';

export default class WeatherService {
  constructor() {}

  public getWeather(latitude, longitude): Observable<any> {
    console.log('Getting weather...');
    const apikey = process.env.DARKSKY_APIKEY;
    let options = {
      uri: `https://api.darksky.net/forecast/${apikey}/${+latitude},${+longitude}?lang=fi`,
      json: true
    };

    return from(rp(options));
  }
}
