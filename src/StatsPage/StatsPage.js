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

  lineChartProps = {
    margin: { top: 20, right: 30, bottom: 20, left: 35 },
    animate: true,
    enableSlices: "x",
  };

  commonProperties = {
    margin: { top: 20, right: 5, bottom: 20, left: 5 },
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
    return data;
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <section className="StatsPageLoad">Loading...</section>
          <div className="btn-container">
            <Link className="link-button" to="/sparring_log">
              Back
            </Link>
          </div>
          ;
        </div>
      );
    }
    if (!this.state.entries) {
      return (
        <div>
          <section className="StatsPageLoad">
            Not enough data to show statistics
          </section>
          <div className="btn-container">
            <Link className="link-button" to="/sparring_log">
              Back
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="btn-container">
          <Link className="link-button" to="/sparring_log">
            Back
          </Link>
        </div>
        <h2 className="page-title">Cardio Data</h2>
        <div className="line-chart" title="line chart">
          <ResponsiveLine
            data={this.lineChartData()}
            {...this.lineChartProps}
          />
        </div>

        <h2 className="stat-title">Submissons</h2>
        <div className="pie-chart">
          <ResponsivePie
            data={this.categoryData("submissions")}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
        <h2 className="stat-title">Taps</h2>
        <div className="pie-chart">
          <ResponsivePie
            data={this.categoryData("taps")}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
        <h2 className="stat-title">Sweeps</h2>
        <div className="pie-chart">
          <ResponsivePie
            data={this.categoryData("sweeps")}
            {...this.commonProperties}
            legends={[]}
          />
        </div>
      </div>
    );
  }
}
