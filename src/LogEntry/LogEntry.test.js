import React from "react";
import ReactDOM from "react-dom";
import LogEntry from "./LogEntry";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const entry = {
    id: 1,
    date: "2021-04-18",
    rounds: 1,
    round_length: 15,
    cardio: 5,
    notes: "Today was a good day!",
    submissions: [
      {
        count: 1,
        name: "Rear Naked Choke",
      },
      {
        count: 5,
        name: "Arm Bar",
      },
    ],
    taps: [
      {
        count: 2,
        name: "Arm Bar",
      },
      {
        count: 20,
        name: "Heel Hook",
      },
    ],
    sweeps: [
      {
        count: 3,
        name: "Hip Sweep",
      },
    ],
  };

  ReactDOM.render(
    <BrowserRouter>
      <LogEntry entry={entry} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
