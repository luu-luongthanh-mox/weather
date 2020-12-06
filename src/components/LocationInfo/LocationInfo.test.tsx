import React from "react";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

import { storeMock } from "@mocks/store";
import { StateStatus } from "@models/State";

import { LocationInfo } from "./LocationInfo";

const mockStore = createMockStore(getDefaultMiddleware());
const store = mockStore(storeMock);

describe("Component: LocationInfo", () => {
  it("renders data on screen", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <LocationInfo />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders city name", () => {
    render(
      <Provider store={store}>
        <LocationInfo />
      </Provider>
    );
    const linkElement = screen.getByText(/Hong Kong/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders city type", () => {
    render(
      <Provider store={store}>
        <LocationInfo />
      </Provider>
    );
    const linkElement = screen.getByText(/City/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders city timezone", () => {
    render(
      <Provider store={store}>
        <LocationInfo />
      </Provider>
    );
    const linkElement = screen.getByText(/timezone: Asia\/Hong_Kong/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders loading", () => {
    const newMock = { ...storeMock };
    newMock.forecastWeather.loading = StateStatus.loading;
    const localStore = mockStore(newMock);
    render(
      <Provider store={localStore}>
        <LocationInfo />
      </Provider>
    );
    const linkElement = screen.getByText(/Loading data/i);
    expect(linkElement).toBeInTheDocument();
  });
});
