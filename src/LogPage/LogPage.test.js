import React from "react";
import ReactDOM from "react-dom";
import LogPage from "./LogPage";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LogPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
