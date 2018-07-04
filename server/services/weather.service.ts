import { Observable, from } from 'rxjs';
import {} from 'rxjs/operators';
import * as rp from 'request-promise';

export default class WeatherService {
  constructor() {}

  public getWeather(latitude, longitude): Observable<any> {
    console.log('Getting weather...');
    let options = {
      uri: `https://api.darksky.net/forecast/95b776e4b78e6604376da34b897897d2/${+latitude},${+longitude}`
    };

    return from(rp(options));
  }
}
