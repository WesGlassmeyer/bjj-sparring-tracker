import React, { Component } from "react";
import { Link } from "react-router-dom";
import SpecPage from "../SpecPage/SpecPage";
import "./DetailPage.css";

export default class DetailPage extends Component {
  state = {
    // valueSelections: {},
    currentForm: "main",
    date: "",
    cardio: {
      rounds: 0,
      round_length: 0,
      rating: 0,
    },
    submissions: [
      {
        count: 0,
        category: "",
        name: "",
      },
    ],
    sweeps: [
      {
        count: 0,
        category: "",
        name: "",
      },
    ],
    taps: [
      {
        count: 0,
        category: "",
        name: "",
      },
    ],
    notes: "",
  };

  changeForms = (formName) => {
    if (this.state.currentForm !== "main") {
      this.setState({ currentForm: "main" });
    } else {
      this.setState({ currentForm: formName });
      console.log("form name", formName);
    }
  };

  // setFilterSelections = (value, valueType) => {
  //   const { valueSelections } = this.state;
  //   this.setState({
  //     valueSelections: { ...valueSelections, [valueType]: value },
  //   });
  // };

  setSpecPageState = (addedNames) => {
    if (this.state.currentForm === "subs") {
      this.setState({
        submissions: [addedNames],
      });
    } else if (this.state.currentForm === "taps") {
      this.setState({
        taps: [addedNames],
      });
    } else if (this.state.currentForm === "sweeps") {
      this.setState({
        sweeps: [addedNames],
      });
    }
    console.log(this.state.currentForm);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    if (this.state.currentForm === "subs") {
      return (
        <SpecPage
          title={"Submissons"}
          setSpecPageState={this.setSpecPageState}
          changeForms={this.changeForms}
        />
      );
    } else if (this.state.currentForm === "taps") {
      return (
        <SpecPage
          title={"Taps"}
          setSpecPageState={this.setSpecPageState}
          changeForms={this.changeForms}
        />
      );
    } else if (this.state.currentForm === "sweeps") {
      return (
        <SpecPage
          title={"Sweeps"}
          setSpecPageState={this.setSpecPageState}
          changeForms={this.changeForms}
        />
      );
    }
    return (
      <div className="detail-page-container">
        <form onSubmit={this.handleSubmit}>
          <h2 className="detail-page-title">Add Sparring Details</h2>
          <label htmlFor="date">Select date:</label>
          <input type="date" id="date" name="date" />
          <br />
          <label htmlFor="rounds">Total Training Rounds:</label>
          <select name="rounds" id="rounds" onChange={this.setFilterSelections}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <br />
          <label htmlFor="length">Round Length:</label>
          <select name="length" id="length" onChange={this.setFilterSelections}>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <br />
          <label htmlFor="length">Rate Cardio:</label>
          <select name="length" id="length" onChange={this.setFilterSelections}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <p>
            submissons
            <button
              type="button"
              className="add-subbtn"
              onClick={() => {
                this.changeForms("subs");
              }}
            >
              Add Subs
            </button>
          </p>
          <p>
            Taps
            <button
              type="button"
              className="add-tapbtn"
              onClick={() => {
                this.changeForms("taps");
              }}
            >
              Add taps
            </button>
          </p>
          <p>
            sweeps
            <button
              type="button"
              className="add-sweepbtn"
              onClick={() => {
                this.changeForms("sweeps");
              }}
            >
              Add sweeps
            </button>
          </p>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            cols="50"
            placeholder="add notes"
          ></textarea>
          <div className="add-details">
            <button type="submit" className="add-detailsbtn">
              <Link to="/sparring_log">Save</Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
