import { RootState } from "@stores";

export const getForecastWeather = (state: RootState) => state.forecastWeather;

export const getForecastWeatherData = (state: RootState) =>
  state.forecastWeather.data?.consolidated_weather || [];
