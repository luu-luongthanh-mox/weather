export type WeatherStateAbbr =
  | "sn"
  | "sl"
  | "h"
  | "t"
  | "hr"
  | "lr"
  | "s"
  | "hc"
  | "lc"
  | "c";

export interface ForecastWeather {
  air_pressure: number;
  applicable_date: string;
  created: string;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: WeatherStateAbbr;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
}

export interface WeatherLocation {
  consolidated_weather: ForecastWeather[];
  latt_long: string;
  location_type: string;
  sun_rise: string;
  sun_set: string;
  time: string;
  timezone: string;
  timezone_name: string;
  title: string;
  woeid: number;
}
