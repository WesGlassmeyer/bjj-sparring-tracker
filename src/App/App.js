import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import LogPage from "../LogPage/LogPage";
import StatsPage from "../StatsPage/StatsPage";

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/sparring_log" component={LogPage} />
        <Route exact path="/sparring_stats" component={StatsPage} />
      </main>
    );
  }
}
