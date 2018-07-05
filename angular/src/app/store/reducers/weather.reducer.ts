import * as fromWeather from '../actions/weather.actions';

export interface WeatherState {
  loading: boolean;
  loaded: boolean;
  weather: { summary: string; temp: string };
}

export const initialState: WeatherState = {
  loading: false,
  loaded: false,
  weather: { summary: '', temp: '' }
};

export function reducer(
  state = initialState,
  action: fromWeather.WeatherAction
): WeatherState {
  switch (action.type) {
    case fromWeather.WEATHER_LOAD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromWeather.WEATHER_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        weather: action.payload.currently.summary
      };
    }
    default:
      return state;
  }
}

export const isLoading = (state: WeatherState) => state.loading;
export const getWeather = (state: WeatherState) => state.weather;
