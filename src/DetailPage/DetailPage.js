import React, { Component } from "react";
import SpecPage from "../SpecPage/SpecPage";
import "./DetailPage.css";

export default class DetailPage extends Component {
  state = {
    edit: false,
    currentForm: "main",
    date: "",
    rounds: "",
    round_length: "",
    cardio: "",
    submissions: [],
    sweeps: [],
    taps: [],
    notes: "",
  };

  setDate = (event) => {
    this.setState({ date: event.target.value });
  };

  setRounds = (event) => {
    this.setState({
      rounds: parseInt(event.target.value),
    });
  };

  setLength = (event) => {
    this.setState({
      round_length: parseInt(event.target.value),
    });
  };

  setCardio = (event) => {
    this.setState({
      cardio: parseInt(event.target.value),
    });
  };

  setNotes = (event) => {
    this.setState({
      notes: event.target.value,
    });
  };

  changeForms = (formName) => {
    if (this.state.currentForm !== "main") {
      this.setState({ currentForm: "main" });
    } else {
      this.setState({ currentForm: formName });
    }
  };

  setSpecPageState = (addedNames) => {
    if (this.state.currentForm === "subs") {
      this.setState({
        submissions: addedNames,
      });
    } else if (this.state.currentForm === "taps") {
      this.setState({
        taps: addedNames,
      });
    } else if (this.state.currentForm === "sweeps") {
      this.setState({
        sweeps: addedNames,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.handleEdit();
  };

  detailPageState = () => {
    if (this.state.currentForm === "subs") {
      return this.state.submissions;
    } else if (this.state.currentForm === "taps") {
      return this.state.taps;
    } else if (this.state.currentForm === "sweeps") {
      return this.state.sweeps;
    }
  };

  render() {
    if (this.state.currentForm === "subs") {
      return (
        <SpecPage
          title={"Submissons"}
          setSpecPageState={this.setSpecPageState}
          changeForms={this.changeForms}
          detailPageState={this.detailPageState}
        />
      );
    } else if (this.state.currentForm === "taps") {
      return (
        <SpecPage
          title={"Taps"}
          setSpecPageState={this.setSpecPageState}
          changeForms={this.changeForms}
          detailPageState={this.detailPageState}
        />
      );
    } else if (this.state.currentForm === "sweeps") {
      return (
        <SpecPage
          title={"Sweeps"}
          setSpecPageState={this.setSpecPageState}
          changeForms={this.changeForms}
          detailPageState={this.detailPageState}
        />
      );
    }
    return (
      <div className="detail-page-container">
        <form onSubmit={this.handleSubmit}>
          <h2 className="detail-page-title">Add Sparring Details</h2>
          <button onClick={this.props.changeForms}>Back</button>
          <br />
          <label htmlFor="date">Select date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={
              this.state.currentForm === "main"
                ? this.state.date
                : this.props.data.date
            }
            // value={this.state.date}
            onChange={this.setDate}
          />
          <br />
          <label htmlFor="rounds">Total Training Rounds:</label>
          <input
            value={this.state.rounds}
            type="number"
            min="1"
            max="100"
            step="1"
            onChange={this.setRounds}
          />
          <br />
          <label htmlFor="length">Round Length:</label>
          <input
            value={this.state.round_length}
            type="number"
            min="1"
            max="60"
            step="1"
            onChange={this.setLength}
          />
          <br />
          <label htmlFor="length">Rate Cardio:</label>
          <select
            name="length"
            id="length"
            onChange={this.setCardio}
            value={this.state.cardio}
          >
            <option selected disabled value="">
              -- Select --
            </option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          <p>
            Submission
            <button
              type="button"
              className="add-sub-btn"
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
              className="add-tap-btn"
              onClick={() => {
                this.changeForms("taps");
              }}
            >
              Add Taps
            </button>
          </p>
          <p>
            Sweeps
            <button
              type="button"
              className="add-sweepbtn"
              onClick={() => {
                this.changeForms("sweeps");
              }}
            >
              Add Sweeps
            </button>
          </p>
          <label htmlFor="notes">Notes:</label>
          <textarea
            value={this.state.notes}
            id="notes"
            name="notes"
            rows="4"
            cols="50"
            placeholder="add notes"
            onChange={this.setNotes}
          ></textarea>
          <div className="add-details">
            <button
              type="submit"
              className="add-details-btn"
              onClick={this.handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
