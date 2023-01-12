import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import './fonts/JetBrainsMono-Medium.ttf'
import "./index.css"

import { SoftUIControllerProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
            <App />
    </SoftUIControllerProvider>
  </BrowserRouter>
);
