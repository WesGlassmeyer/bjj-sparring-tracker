import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="landing-page">
          <div className="landing-page-text">
            <p className="welcome">Welcome to the BJJ Sparring Tracker!</p>
            <p>In Brazilian Jiu Jitsu we do a lot of sparring.</p>
            <p>
              You can use our app to track your sparring sessions and use the
              statistics to help guide your training.
            </p>
            <p>
              Click below to go to the sparring log and create your first entry.
            </p>
          </div>
        </div>
        <div className="btn-container">
          <Link className="link-button" to="/sparring_log">
            Sparring Log
          </Link>
        </div>
      </div>
    );
  }
}
