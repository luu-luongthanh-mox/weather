import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { store } from "@stores";

import { Router } from "./Router";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer />
    </Provider>
  );
}

export default App;
