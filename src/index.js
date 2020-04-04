import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.min.css";
import "./assets/demo/demo.css";
import "./index.css";
import MainTemplate from "./MainTemplate";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <MainTemplate />
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
