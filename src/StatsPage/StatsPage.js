import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StatsPage.css";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import config from "../config";

export default class StatsPage extends Component {
  state = {
    entries: [],
    isLoading: true,
  };

  commonProperties = {
    margin: { top: 20, right: 20, bottom: 60, left: 80 },
    animate: true,
    enableSlices: "x",
  };

  componentDidMount() {
    fetch(`${config.SERVER_endpoint}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        if (!response.ok)
          return response.json().then((error) => Promise.reject(error));
        return response.json();
      })
      .catch((error) => {
        console.error({ error });
      })
      .then((res) => {
        this.setState({
          entries: res,
          isLoading: false,
        });
      });
  }

  categoryData = (category) => {
    let moveCounter = {};
    this.state.entries.forEach((entry) => {
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

  lineChartData = () => {
    let data = [];
    let rounds = { id: "rounds", data: [] };
    let roundLength = { id: "round length", data: [] };
    let cardio = { id: "cardio", data: [] };
    this.state.entries.forEach((entry) => {
      rounds.data.push({
        x: entry.date,
        y: entry.rounds,
      });
      roundLength.data.push({
        x: entry.date,
        y: entry.round_length,
      });
      cardio.data.push({
        x: entry.date,
        y: entry.cardio,
      });
    });
    data.push(rounds, roundLength, cardio);
    console.log(data);
    return data;
  };

  render() {
    if (this.state.isLoading) {
      return <section className="StatsPageLoad">Loading...</section>;
    }
    if (this.state.entries.length === 0) {
      return <section>Not enough data to show statistics</section>;
    }
    return (
      <div>
        <h2>Cardio Data</h2>
        <div className="line-chart" style={{ height: "75vh", width: "75vw" }}>
          <ResponsiveLine
            data={this.lineChartData()}
            {...this.commonProperties}
          />
        </div>

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
