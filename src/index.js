import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./assets/scss/_styles.scss";

import 'boxicons';

import App from "./App";

document.title = "Dashboard Design";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

*/
