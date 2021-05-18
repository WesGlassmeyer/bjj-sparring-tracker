import React from "react";
import ReactDOM from "react-dom";
import SpecPage from "./SpecPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const detailPageState = () => {
    return [
      { name: "Arm Bar", count: 2 },
      { name: "Triangle", count: 4 },
    ];
  };
  const setSpecPageState = () => {};

  ReactDOM.render(
    <SpecPage
      title={"Submissions"}
      setSpecPageState={setSpecPageState}
      //   changeForms={this.changeForms}
      detailPageState={detailPageState}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
