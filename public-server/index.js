"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cors = require("cors");
const news_service_1 = require("./services/news.service");
const weather_service_1 = require("./services/weather.service");
const movie_service_1 = require("./services/movie.service");
const newsService = new news_service_1.default();
const weatherService = new weather_service_1.default();
const movieService = new movie_service_1.default();
const app = express();
app.use(cors());
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.get('/api/news', (req, res) => {
    let articles = [];
    newsService.getNews().subscribe(article => {
        // console.log(article);
        articles.push(article);
    }, error => {
        console.log(error);
    }, () => res.json(articles));
});
app.get('/api/movies', (req, res) => {
    let articles = [];
    movieService.getMovies().subscribe(article => {
        // console.log(article);
        articles.push(article);
    }, error => {
        console.log(error);
    }, () => res.json(articles));
});
app.get('/api/weather/:latitude/:longitude', (req, res) => {
    weatherService
        .getWeather(req.params.latitude, req.params.longitude)
        .subscribe(weather => {
        res.send({
            temp: ((weather.currently.temperature - 32) * 5) / 9,
            summary: weather.currently.summary
        });
    }, error => {
        console.log('Virhe säätietojen haussa.');
        console.log(error.message);
    }
    // () => res.json('done')
    );
});
app.get('*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening port ${port}`));
//# sourceMappingURL=index.js.map