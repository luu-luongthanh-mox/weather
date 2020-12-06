import { configureStore } from "@reduxjs/toolkit";
import { forecastWeatherSlice } from "./forecastWeather";
import { locationSlice } from "./location";

export const store = configureStore({
  reducer: {
    forecastWeather: forecastWeatherSlice.reducer,
    location: locationSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
