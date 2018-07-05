import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import NewsService from './services/news.service';
import WeatherService from './services/weather.service';
const newsService = new NewsService();
const weatherService = new WeatherService();
const app = express();

app.use(cors());

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('/news', (req, res) => {
  let articles = [];
  newsService.getNews().subscribe(
    article => {
      // console.log(article);
      articles.push(article);
    },
    error => {
      console.log(error);
    },
    () => res.json(articles)
  );
});

app.get('/weather/:latitude/:longitude', (req, res) => {
  weatherService
    .getWeather(req.params.latitude, req.params.longitude)
    .subscribe(
      weather => {
        res.send({
          temp: ((weather.currently.temperature - 32) * 5) / 9,
          summary: weather.currently.summary
        });
      },
      error => {
        console.log('virhe');
        console.log(error.message);
      }
      // () => res.json('done')
    );
});

app.get('*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening port ${port}`));
