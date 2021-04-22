import React, { Component } from "react";
import LogList from "../LogList/LogList";
import { Link } from "react-router-dom";
import "./LogPage.css";

export default class LogPage extends Component {
  render() {
    return (
      <div>
        <h2 className="log-page-title">Sparring Log</h2>

        <LogList />
        <div class="add-log">
          <button type="submit" class="add-logbtn">
            <Link to="/sparring_details">Add Sparring Log</Link>
          </button>
        </div>
      </div>
    );
  }
}
