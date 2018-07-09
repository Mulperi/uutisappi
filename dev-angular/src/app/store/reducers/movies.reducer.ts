import * as fromMovies from '../actions/movies.actions';

export interface MoviesState {
  loading: boolean;
  loaded: boolean;
  movies: any[];
}

export const initialState: MoviesState = {
  loading: false,
  loaded: false,
  movies: []
};

export function reducer(
  state = initialState,
  action: fromMovies.MoviesAction
): MoviesState {
  switch (action.type) {
    case fromMovies.MOVIES_LOAD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromMovies.MOVIES_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        movies: action.payload
      };
    }
    default:
      return state;
  }
}

export const isLoading = (state: MoviesState) => state.loading;
export const getMovies = (state: MoviesState) => state.movies;
