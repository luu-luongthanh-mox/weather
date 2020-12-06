import { RootState } from "@stores";

export const getForecastWeather = (state: RootState) => state.forecastWeather;

export const getForecastWeatherData = (state: RootState) =>
  state.forecastWeather.data?.consolidated_weather || [];

export const getLocalTime = (state: RootState) =>
  state.forecastWeather.data?.time;

export const getTimezone = (state: RootState) =>
  state.forecastWeather.data?.timezone || "";
