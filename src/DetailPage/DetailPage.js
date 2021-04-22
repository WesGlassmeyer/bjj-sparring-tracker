import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DetailPage.css";

export default class DetailPage extends Component {
  render() {
    return (
      <div>
        <h2 className="detail-page-title">Add Sparring Details</h2>
        <label for="date">Select date:</label>
        <input type="date" id="date" name="date" />
        <br />
        <label for="rounds">Total Training Rounds:</label>
        <select name="rounds" id="rounds">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <br />
        <label for="length">Round Length:</label>
        <select name="length" id="length">
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />
        <label for="length">Rate Cardio:</label>
        <select name="length" id="length">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>
          submissons
          <button type="submit" class="add-subbtn">
            <Link to="/sparring_specs">Add Subs</Link>
          </button>
        </p>
        <p>
          Taps
          <button type="submit" class="add-tapbtn">
            <Link to="/sparring_specs">Add taps</Link>
          </button>
        </p>
        <p>
          sweeps
          <button type="submit" class="add-sweepbtn">
            <Link to="/sparring_specs">Add sweeps</Link>
          </button>
        </p>
        <label for="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          rows="4"
          cols="50"
          placeholder="add notes"
        ></textarea>
        <div class="add-details">
          <button type="submit" class="add-detailsbtn">
            <Link to="/sparring_log">Save</Link>
          </button>
        </div>
      </div>
    );
  }
}
