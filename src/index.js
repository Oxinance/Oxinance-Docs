import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import './fonts/JetBrainsMono-Medium.ttf'
import './fonts/JetBrainsMono-Italic.ttf'
import "./index.css"

import { OxiUIControllerProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <OxiUIControllerProvider>
            <App />
    </OxiUIControllerProvider>
  </BrowserRouter>
);
