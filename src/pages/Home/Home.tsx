import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { SearchLocation } from "@components/SearchLocation";
import { WeatherForecast } from "@components/WeatherForecast";
import { LocationInfo } from "@components/LocationInfo";
import { SearchResult } from "@models/SearchResult";
import { getForecastWeatherById } from "@stores/forecastWeather";
import { getForecastWeather } from "@stores/forecastWeather/selector";

import styles from "./home.module.css";

export const Home: React.FC<{}> = () => {
  const { error } = useSelector(getForecastWeather);
  const dispatch = useDispatch();
  if (error) {
    toast.error(error);
  }

  const onLocationChanged = (location: SearchResult) => {
    dispatch(getForecastWeatherById(location?.id.toString()));
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SearchLocation onLocationChanged={onLocationChanged}></SearchLocation>
        <LocationInfo />
        <WeatherForecast />
      </div>
    </div>
  );
};
