import * as fromNews from '../actions/news.actions';

export interface NewsState {
  loading: boolean;
  loaded: boolean;
  news: any[];
}

export const initialState: NewsState = {
  loading: false,
  loaded: false,
  news: []
};

export function reducer(
  state = initialState,
  action: fromNews.NewsAction
): NewsState {
  switch (action.type) {
    case fromNews.NEWS_LOAD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromNews.NEWS_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        news: action.payload
      };
    }
    default:
      return state;
  }
}

export const isLoading = (state: NewsState) => state.loading;
export const getNews = (state: NewsState) => state.news;
