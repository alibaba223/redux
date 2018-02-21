import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
