import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { storeone } from "./redux/stores/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={storeone}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
