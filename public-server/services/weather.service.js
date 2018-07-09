"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const rp = require("request-promise");
class WeatherService {
    constructor() { }
    getWeather(latitude, longitude) {
        console.log('Getting weather...');
        const apikey = process.env.DARKSKY_APIKEY;
        let options = {
            uri: `https://api.darksky.net/forecast/${apikey}/${+latitude},${+longitude}?lang=fi`,
            json: true
        };
        return rxjs_1.from(rp(options));
    }
}
exports.default = WeatherService;
//# sourceMappingURL=weather.service.js.map