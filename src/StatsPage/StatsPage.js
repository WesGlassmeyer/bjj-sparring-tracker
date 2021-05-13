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

  submissionsData = () => {
    let moveCounter = {};
    dummydata.entries.forEach((entry) => {
      if (entry.submissions.length > 0) {
        entry.submissions.forEach((move) => {
          if (moveCounter[move.name]) {
            moveCounter[move.name] += move.count;
          } else {
            moveCounter[move.name] = move.count;
          }
        });
      }
    });
    console.log(moveCounter);
    const convertedData = [];
    Object.keys(moveCounter).forEach((item) => {
      console.log(item, moveCounter[item]);
      const newFormat = {
        id: item,
        value: moveCounter[item],
      };
      console.log(newFormat);
      convertedData.push(newFormat);
    });

    console.log(convertedData);
  };

  render() {
    return (
      <div>
        {/* <div classname="line-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsiveLine data={dummydata.nivo} {...this.commonProperties} />
        </div> */}
        {/* <button
          type="button"
          className="data-btn"
          onClick={this.submissionsData}
        >
          data
        </button> */}
        <h2>Submissons</h2>
        <div className="pie-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsivePie
            // data={this.submissionsData}
            data={dummydata.pie}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
        <h2>Taps</h2>
        <div className="pie-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsivePie
            data={dummydata.pie}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
        <h2>Sweeps</h2>
        <div className="pie-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsivePie
            data={dummydata.pie}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
        <div className="back-btn">
          <button
            type="button"
            className="back-btn"
            onClick={this.submissionsData}
          >
            <Link to="/sparring_log">Back</Link>
          </button>
        </div>
      </div>
    );
  }
}
