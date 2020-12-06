import React from "react";
import { WeatherStateAbbr } from "@models/ForecastWeather";

export const useWeatherIcon = (abbr: WeatherStateAbbr) => {
  return `/weather/${abbr}.svg`;
};
