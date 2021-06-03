import React, { Component } from "react";
import SpecPage from "../SpecPage/SpecPage";
import "./DetailPage.css";
import config from "../config";

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    if (props.initialData) {
      let currentForm = { currentForm: "main" };
      let initialData = props.initialData;
      this.state = { ...initialData, ...currentForm };
    } else {
      this.state = {
        currentForm: "main",
        date: "",
        rounds: "",
        round_length: "",
        cardio: "",
        submissions: [],
        sweeps: [],
        taps: [],
        notes: "",
        dateError: "",
        roundsError: "",
        round_lengthError: "",
        cardioError: "",
        movesError: "",
      };
    }
  }

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

  validate = () => {
    let dateError = "";
    let roundsError = "";
    let round_lengthError = "";
    let cardioError = "";
    let movesError = "";

    if (this.state.date === "") {
      dateError = "Date field can't be empty";
    }
    if (this.state.rounds === "") {
      roundsError = "Rounds field can't be empty";
    }
    if (this.state.round_length === "") {
      round_lengthError = "Round Length field can't be empty";
    }
    if (this.state.cardio === "") {
      cardioError = "Cardio field can't be empty";
    }
    if (
      this.state.submissions.length === 0 &&
      this.state.taps.length === 0 &&
      this.state.sweeps.length === 0
    ) {
      movesError = "Must contain either submissions, taps or sweeps";
    }
    if (dateError || roundsError || round_lengthError || cardioError) {
      this.setState({
        dateError,
        roundsError,
        round_lengthError,
        cardioError,
        movesError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      fetch(
        this.state.id
          ? `${config.SERVER_endpoint}/` + this.state.id
          : `${config.SERVER_endpoint}`,
        {
          method: this.state.id ? "PUT" : "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            date: this.state.date,
            rounds: this.state.rounds,
            round_length: this.state.round_length,
            cardio: this.state.cardio,
            notes: this.state.notes,
            submissions: this.state.submissions,
            sweeps: this.state.sweeps,
            taps: this.state.taps,
          }),
        }
      )
        .then((response) => {
          if (!response.ok)
            return response.json().then((error) => Promise.reject(error));
          return response.json();
        })
        .catch((error) => {
          console.error({ error });
        })
        .then(() => {
          this.props.handleEditState();
        });
    }
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
          category={this.state.currentForm}
        />
      );
    } else if (this.state.currentForm === "taps") {
      return (
        <SpecPage
          title={"Taps"}
          setSpecPageState={this.setSpecPageState}
          changeForms={this.changeForms}
          detailPageState={this.detailPageState}
          category={this.state.currentForm}
        />
      );
    } else if (this.state.currentForm === "sweeps") {
      return (
        <SpecPage
          title={"Sweeps"}
          setSpecPageState={this.setSpecPageState}
          changeForms={this.changeForms}
          detailPageState={this.detailPageState}
          category={this.state.currentForm}
        />
      );
    }
    return (
      <div className="detail-page-container">
        <form>
          <h2 className="detail-page-title">Add Sparring Details</h2>
          <button type="button" onClick={this.props.handleEditState}>
            Back
          </button>
          <br />
          <label htmlFor="date">Select date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={this.state.date}
            onChange={this.setDate}
          />
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.dateError}
          </div>
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
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.roundsError}
          </div>
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
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.round_lengthError}
          </div>
          <br />
          <label htmlFor="length">Rate Cardio:</label>
          <select
            name="length"
            id="length"
            onChange={this.setCardio}
            value={this.state.cardio}
          >
            <option disabled value="">
              -- Select --
            </option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.cardioError}
          </div>
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
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.movesError}
          </div>
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
