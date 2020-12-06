import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import classnames from "classnames";

import { ForecastWeather } from "@models/ForecastWeather";
import { useDisplayTemp } from "@hooks/useDisplayTemp";
import { useWeatherIcon } from "@hooks/useWeatherIcon";
import { useGetDayName } from "@hooks/useGetDayName";
import { isToday } from "@utils/date";

import styles from "./weatherForecast.module.css";

interface WeatherForecastProps {
  data: ForecastWeather;
}

export const WeatherForecastItem: React.FC<WeatherForecastProps> = ({
  data,
}) => {
  const minTemp = useDisplayTemp(data.min_temp);
  const maxTemp = useDisplayTemp(data.max_temp);
  const iconSrc = useWeatherIcon(data.weather_state_abbr);
  const dayName = useGetDayName(data.applicable_date);
  const isActive = isToday(new Date(data.applicable_date));
  return (
    <Col xs={12} sm={6} md={4} lg>
      <Card>
        <Card.Body className={styles.itemContent}>
          <Card.Title className={isActive ? styles.today : ""}>
            {dayName}
          </Card.Title>
          <Card.Img src={iconSrc} width="50" className={styles.icon} />
          <Row>
            <Col className={classnames(styles.temp, styles.tempHight)}>
              {maxTemp}
            </Col>
            <Col className={styles.temp}>{minTemp}</Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};
