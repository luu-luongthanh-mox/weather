import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";

import {
  getForecastWeatherData,
  getLocalTime,
  getTimezone,
} from "@stores/forecastWeather/selector";

import { WeatherForecastItem } from "./WeatherForecastItem";

interface WeatherForecastProps {}

export const WeatherForecast: React.FC<WeatherForecastProps> = () => {
  const weathers = useSelector(getForecastWeatherData);
  const localtime = useSelector(getLocalTime);
  const timezone = useSelector(getTimezone);
  const filtered = [...weathers].splice(0, 5);
  return (
    <Row>
      {filtered.map((item) => (
        <WeatherForecastItem
          data={item}
          key={item.id}
          localtime={localtime}
          timezone={timezone}
        />
      ))}
    </Row>
  );
};
