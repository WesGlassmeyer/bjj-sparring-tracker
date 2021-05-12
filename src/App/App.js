import React, { Component } from "react";
// import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import LogPage from "../LogPage/LogPage";
// import DetailPage from "../DetailPage/DetailPage";
// import SpecPage from "../SpecPage/SpecPage";
import StatsPage from "../StatsPage/StatsPage";
import NavBar from "../NavBar/NavBar";

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <NavBar></NavBar>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/sparring_log" component={LogPage} />
        <Route exact path="/sparring_stats" component={StatsPage} />
      </main>
    );
  }
}
