import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StatsPage.css";
// import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import dummydata from "../dummydata";

export default class StatsPage extends Component {
  commonProperties = {
    margin: { top: 20, right: 20, bottom: 60, left: 80 },
    animate: true,
    enableSlices: "x",
  };

  categoryData = (category) => {
    let moveCounter = {};
    dummydata.entries.forEach((entry) => {
      if (entry[category].length > 0) {
        entry[category].forEach((move) => {
          if (moveCounter[move.name]) {
            moveCounter[move.name] += move.count;
          } else {
            moveCounter[move.name] = move.count;
          }
        });
      }
    });

    const convertedData = [];
    Object.keys(moveCounter).forEach((item) => {
      const newFormat = {
        id: item,
        value: moveCounter[item],
      };
      convertedData.push(newFormat);
    });
    return convertedData;
  };

  render() {
    return (
      <div>
        {/* <div classname="line-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsiveLine data={dummydata.nivo} {...this.commonProperties} />
        </div> */}

        <h2>Submissons</h2>
        <div className="pie-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsivePie
            data={this.categoryData("submissions")}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
        <h2>Taps</h2>
        <div className="pie-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsivePie
            data={this.categoryData("taps")}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
        <h2>Sweeps</h2>
        <div className="pie-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsivePie
            data={this.categoryData("sweeps")}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
        <div className="back-btn">
          <button type="button" className="back-btn">
            <Link to="/sparring_log">Back</Link>
          </button>
        </div>
      </div>
    );
  }
}
