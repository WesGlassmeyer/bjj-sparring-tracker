import React from "react";
import ReactDOM from "react-dom";
import LogList from "./LogList";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LogList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
