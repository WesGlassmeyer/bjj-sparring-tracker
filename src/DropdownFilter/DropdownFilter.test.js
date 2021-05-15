import React from "react";
import ReactDOM from "react-dom";
import DropdownFilter from "./DropdownFilter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const arm_attacks = {
    id: "arm attacks",
    label: "Select Submissions",
    options: ["Americana", "Arm Bar", "Kimura", "Omoplata"],
  };

  ReactDOM.render(
    <DropdownFilter
      id={arm_attacks.id}
      label={arm_attacks.label}
      options={arm_attacks.options}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
