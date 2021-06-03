import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <p>Welcome to the BJJ Sparring Tracker!</p>
        <p>In Brazilian Jiu Jitsu, we do a lot of sparring.</p>
        <p>
          You can use our app to track your sparring sessions and use the
          statistics to help guide you training.
        </p>
        <p>Click here to go to the sparring log and create your first entry.</p>
        <button type="button" className="landing-page-btn">
          <Link to="/sparring_log">Sparring Log</Link>
        </button>
      </div>
    );
  }
}
