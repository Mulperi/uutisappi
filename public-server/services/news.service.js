"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const rp = require("request-promise");
const cheerio = require("cheerio");
class NewsService {
    constructor() { }
    getNews() {
        console.log('Getting news...');
        let options = {
            uri: `https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET`,
            transform: body => {
                return cheerio.load(body, { xmlMode: true });
            }
        };
        return rxjs_1.from(rp(options)).pipe(operators_1.concatMap($ => {
            return $('item').map(function (i, elem) {
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
        }));
    }
}
exports.default = NewsService;
//# sourceMappingURL=news.service.js.map