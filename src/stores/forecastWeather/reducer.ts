import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { WeatherLocation } from "@models/ForecastWeather";
import { getWeatherForecastById } from "@services/MetaWeather";
import { StateStatus } from "@models/State";

interface State {
  data: WeatherLocation;
  loading: string;
  currentRequestId: string | undefined;
  error?: any;
}

const initialState: State = {
  data: {
    consolidated_weather: [],
    latt_long: "",
    location_type: "",
    sun_rise: "",
    sun_set: "",
    time: "",
    timezone: "",
    timezone_name: "",
    title: "",
    woeid: 0,
  },
  loading: StateStatus.idle,
  currentRequestId: undefined,
  error: undefined,
};
const GET_BY_ID_ACTION = "forecastWeather/getById";
export const getForecastWeatherById = createAsyncThunk<any, string>(
  GET_BY_ID_ACTION,
  async (id, { signal }) => {
    if (id) {
      const source = axios.CancelToken.source();
      signal.addEventListener("abort", () => {
        source.cancel();
      });
      const response = await getWeatherForecastById(id, {
        cancelToken: source.token,
      });
      return response;
    }
  }
);

// Ref: https://redux-toolkit.js.org/tutorials/basic-tutorial
// Slice can create actions and reducer together
export const forecastWeatherSlice = createSlice({
  name: "forecastWeather",
  initialState: initialState,
  reducers: {
    storeIdToken: (state, action: PayloadAction<string>) => {
      return { ...state, idToken: action.payload };
    },
  },
  extraReducers: {
    [GET_BY_ID_ACTION + "/pending"]: (state, action) => {
      if (state.loading === StateStatus.idle) {
        state.loading = StateStatus.loading;
        state.currentRequestId = action.meta.requestId;
      }
    },
    [GET_BY_ID_ACTION + "/fulfilled"]: (state, action) => {
      const { requestId } = action.meta;
      if (
        state.loading === StateStatus.loading &&
        state.currentRequestId === requestId
      ) {
        state.loading = StateStatus.idle;
        state.data = action.payload;
        state.currentRequestId = undefined;
      }
    },
    [GET_BY_ID_ACTION + "/rejected"]: (state, action) => {
      const { requestId } = action.meta;
      if (
        state.loading === StateStatus.loading &&
        state.currentRequestId === requestId
      ) {
        state.loading = StateStatus.idle;
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});
