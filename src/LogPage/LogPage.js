import React, { Component } from "react";
import LogList from "../LogList/LogList";
import "./LogPage.css";

export default class LogPage extends Component {
  render() {
    return (
      <div>
        <h2 className="log-page-title">Sparring Log</h2>

        <LogList />
      </div>
    );
  }
}
