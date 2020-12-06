import React from "react";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

import { SearchLocation } from "./SearchLocation";
import { storeMock } from "@mocks/store";

const mockStore = createMockStore(getDefaultMiddleware());
const mockOnLocationChanged = jest.fn();

describe("Component: SearchLocation", () => {
  it("renders data on screen", () => {
    const store = mockStore(storeMock);
    const { asFragment } = render(
      <Provider store={store}>
        <SearchLocation onLocationChanged={mockOnLocationChanged} />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
