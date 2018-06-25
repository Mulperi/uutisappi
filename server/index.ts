import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import NewsService from './services/news.service';
const newsService = new NewsService();
const app = express();

app.use(cors());

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => res.sendFile(path.join(publicPath, 'index.html')));

app.get('/news', (req, res) => {
  let articles = [];
  newsService.getNews().subscribe(
    article => {
      articles.push(article);
    },
    error => {
      console.log(error);
    },
    () => res.json(articles)
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening port ${port}`));
