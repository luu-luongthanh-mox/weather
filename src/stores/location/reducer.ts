import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Location } from "@models/Location";
import { searchLocation } from "@services/MetaWeather";
import { StateStatus } from "@models/State";
import { SearchResult } from "@models/SearchResult";

interface StateLocation {
  selected: Location | null;
  searchResult: SearchResult[];
  loading: string;
  currentRequestId: string | undefined;
  error?: any;
}

const initialState: StateLocation = {
  selected: null,
  searchResult: [],
  loading: StateStatus.idle,
  currentRequestId: undefined,
  error: undefined,
};
const SEARCH_LOCATION_ACTION = "location/search";
export const search = createAsyncThunk<any, string>(
  SEARCH_LOCATION_ACTION,
  async (searchText, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    let response = [];
    if (searchText) {
      response = await searchLocation(searchText, {
        cancelToken: source.token,
      });
    }

    return response;
  }
);

// Ref: https://redux-toolkit.js.org/tutorials/basic-tutorial
// Slice can create actions and reducer together
export const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    storeIdToken: (state, action: PayloadAction<string>) => {
      return { ...state, idToken: action.payload };
    },
  },
  extraReducers: {
    [SEARCH_LOCATION_ACTION + "/pending"]: (state, action) => {
      if (state.loading === StateStatus.idle) {
        state.loading = StateStatus.loading;
        state.currentRequestId = action.meta.requestId;
      }
    },
    [SEARCH_LOCATION_ACTION + "/fulfilled"]: (state, action) => {
      const { requestId } = action.meta;
      if (
        state.loading === StateStatus.loading &&
        state.currentRequestId === requestId
      ) {
        state.loading = StateStatus.idle;
        if (action.payload && action.payload.length) {
          state.searchResult = action.payload.map((item: Location) => {
            return {
              id: item.woeid,
              label: item.title,
            };
          });
        }
        state.currentRequestId = undefined;
      }
    },
    [SEARCH_LOCATION_ACTION + "/rejected"]: (state, action) => {
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
