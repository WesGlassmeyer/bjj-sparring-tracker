import React from "react";
import ReactDOM from "react-dom";
import SpecPage from "./SpecPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const detailPageState = () => {};
  const setSpecPageState = () => {};

  ReactDOM.render(
    <SpecPage
      title={"Submissons"}
      setSpecPageState={setSpecPageState}
      //   changeForms={this.changeForms}
      detailPageState={detailPageState}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
