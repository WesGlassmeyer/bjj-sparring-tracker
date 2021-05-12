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
    let moveCounter = [];
    dummydata.entries.forEach((entry) => {
      // console.log(entry);
      entry.submissions.forEach((move) => {
        // console.log(move);
        const newFormat = {
          id: move.name,
          value: move.count,
        };
        // console.log(newFormat);
        moveCounter.push(newFormat);
        console.log(moveCounter);
      });
    });
  };

  // submissionsData = () => {
  //   let moveCounter = {};
  //   dummydata.entries.forEach((entry) => {
  //     if (entry.submissions.length > 0) {
  //       entry.submissions.forEach((move) => {
  //         if (moveCounter[move.name]) {
  //           moveCounter[move.name] += move.count;
  //         } else {
  //           moveCounter[move.name] = move.count;
  //         }
  //       });
  //     }
  //   });
  //   console.log(moveCounter);
  // const convertedData = [];
  // Object.entries(moveCounter).forEach((item) => {
  //   console.log(item);
  //   const newFormat = {
  //     id: item[0],
  //     value: item[1],
  //   };
  //   console.log(newFormat);
  //   convertedData.push(newFormat);
  // });
  // const convertedData = Object.entries((move) => {
  //   let newFormat = {
  //     id: move.key,
  //     label: move.value,
  //   };
  //   console.log(move);

  //   return newFormat;
  // });
  // const convertedData = Object.keys(moveCounter).map((key) => {
  //   return moveCounter[key];
  // });
  // console.log(convertedData);
  // };

  // submissionsData = () => {
  //   for (let j = 0; j < dummydata.entries.length; j++) {
  //     if (dummydata.entries[j].submissions) {
  //       let newData = [];
  //       for (let i = 0; i < dummydata.entries[j].submissions.length; i++) {
  //         newData.push({
  //           id: dummydata.entries[j].submissions[i].name,
  //           value: dummydata.entries[j].submissions[i].count,
  //         });
  //       }
  //       return newData;
  //     }
  //   }

  //   console.log({ id: dummydata.entries[0].submissions[0].name });
  // };

  render() {
    return (
      <div>
        {/* <div classname="line-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsiveLine data={dummydata.nivo} {...this.commonProperties} />
        </div> */}
        <button
          type="button"
          className="data-btn"
          onClick={this.submissionsData}
        >
          data
        </button>
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

// i need a function that will look thru the entry data, pull out the submissions, name and count and format it to look like dummydata.pie
