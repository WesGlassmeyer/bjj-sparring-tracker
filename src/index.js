import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App/App";
import NavBar from "./NavBar/NavBar";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
