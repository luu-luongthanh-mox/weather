import React from "react";
import { useSelector } from "react-redux";

import { StateStatus } from "@models/State";
import { getForecastWeather } from "@stores/forecastWeather/selector";

import styles from "./locationInfo.module.css";

export const LocationInfo = () => {
  const { loading, data } = useSelector(getForecastWeather);
  if (loading === StateStatus.loading) {
    return <p>Loading data...</p>;
  }
  if (data?.title) {
    return (
      <div className={styles.container}>
        <p className={styles.cityName}>{data.title}</p>
        <p className={styles.type}>{data.location_type}</p>
        <p>timezone: {data.timezone}</p>
      </div>
    );
  }

  return null;
};
