import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SpecPage.css";

export default class SpecPage extends Component {
  render() {
    return (
      <div>
        <h2 className="detail-page-title">Add Specifics</h2>
        <label for="category">Submission Category:</label>
        <select name="category" id="category">
          <option value="1">Chokes</option>
          <option value="2">Arm Attacks</option>
          <option value="3">Leg Attacks</option>
        </select>
        <br />
        <label for="Submission">Submission:</label>
        <select name="Submission" id="Submission">
          <option value="5">rear naked</option>
          <option value="6">triangle</option>
          <option value="7">bow and arrow</option>
          <option value="8">arm triangle</option>
        </select>
        <br />
        <p>
          submissons counter : 0
          <button type="button" class="add-specsbtn">
            {" "}
            +
          </button>
          <button type="button" class="minus-specsbtn">
            {" "}
            -
          </button>
        </p>
        <button type="button" class="add-specslist">
          {" "}
          Add Specifics to list
        </button>
        <p>Selected submission ---------- Count</p>
        <p>Anaconda Choke ---------------- 1</p>{" "}
        <button type="button">delete</button>
        <div class="add-specs">
          <button type="submit" class="add-specsbtn">
            <Link to="/sparring_details">Save</Link>
          </button>
        </div>
      </div>
    );
  }
}
