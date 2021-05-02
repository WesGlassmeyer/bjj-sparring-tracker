import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StatsPage.css";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import dummydata from "../dummydata";

export default class StatsPage extends Component {
  commonProperties = {
    margin: { top: 20, right: 20, bottom: 60, left: 80 },
    animate: true,
    enableSlices: "x",
  };
  render() {
    return (
      <div>
        {console.log(dummydata.nivo)}
        <div classname="line-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsiveLine data={dummydata.nivo} {...this.commonProperties} />
        </div>
        <div classname="pie-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsivePie
            data={dummydata.pie}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
        <div class="add-specs">
          <button type="submit" class="add-specsbtn">
            <Link to="/sparring_details">Save</Link>
          </button>
        </div>
      </div>
    );
  }
}
