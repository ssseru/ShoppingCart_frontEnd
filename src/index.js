import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import rootReducer from "./components/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
