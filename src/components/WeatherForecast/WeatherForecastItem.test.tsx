import React from "react";
import { render, screen } from "@testing-library/react";

import { forecastWeatherItemMock } from "@mocks/forecastWeather";

import { WeatherForecastItem } from "./WeatherForecastItem";

describe("Component: WeatherForecastItem", () => {
  it("renders the data", () => {
    const { asFragment } = render(
      <WeatherForecastItem data={forecastWeatherItemMock} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders max temp", () => {
    render(<WeatherForecastItem data={forecastWeatherItemMock} />);
    const linkElement = screen.getByText(/21/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders min temp", () => {
    render(<WeatherForecastItem data={forecastWeatherItemMock} />);
    const linkElement = screen.getByText(/16/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders day name", () => {
    render(<WeatherForecastItem data={forecastWeatherItemMock} />);
    const linkElement = screen.getByText(/Fri/i);
    expect(linkElement).toBeInTheDocument();
  });
});
