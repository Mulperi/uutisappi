"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const rp = require("request-promise");
const cheerio = require("cheerio");
class NewsService {
    constructor() { }
    getMovies() {
        console.log('Getting movies...');
        let options = {
            uri: `https://www.finnkino.fi/xml/Schedule/`,
            transform: body => {
                return cheerio.load(body, { xmlMode: true });
            }
        };
        return rxjs_1.from(rp(options)).pipe(operators_1.concatMap($ => {
            return $('Show').map(function (i, elem) {
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
        }));
    }
}
exports.default = NewsService;
//# sourceMappingURL=movie.service.js.map