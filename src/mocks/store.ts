import { RootState } from "@stores";
import { StateStatus } from "@models/State";

import { forecastWeatherItemMock } from "./forecastWeather";

export const storeMock: RootState = {
  forecastWeather: {
    data: {
      consolidated_weather: [forecastWeatherItemMock],
      time: "2020-12-06T10:54:45.650562+08:00",
      sun_rise: "2020-12-06T06:50:25.886047+08:00",
      sun_set: "2020-12-06T17:39:03.353222+08:00",
      timezone_name: "LMT",
      title: "Hong Kong",
      location_type: "City",
      woeid: 2165352,
      latt_long: "22.411200,114.153999",
      timezone: "Asia/Hong_Kong",
    },
    loading: StateStatus.idle,
    currentRequestId: undefined,
  },
  location: {
    loading: StateStatus.idle,
    selected: null,
    searchResult: [],
    currentRequestId: undefined,
  },
};
