import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import "./SpecPage.css";

export default class SpecPage extends Component {
  state = {
    category: "",
    name: "",
    count: 0,
    clicked: false,
    filterSelections: [],
  };

  setName = (event) => {
    console.log(event.target.value);
    this.setState({ name: [event.target.value] });
  };

  setCategory = (event) => {
    this.setState({ category: event.target.value });
    console.log(this.state.category);
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count <= 0) {
      this.setState({ count: 0 });
    }
  };

  addSpecs = () => {
    this.setState({ clicked: true });
  };

  setFilterSelections = (value, filterType) => {
    const { filterSelections } = this.state;
    this.setState({
      filterSelections: { ...filterSelections, [filterType]: value },
    });
  };

  render() {
    const dropdownValues = {
      category: {
        id: "category",
        label: "Choose a Category",
        value: ["Arm Attacks", "Chokes", "Leg Attacks"],
      },
      arm_attacks: {
        id: "arm attacks",
        label: "Choose a Submission",
        value: ["Americana", "Arm Bar", "Kimura", "Omoplata"],
      },
      chokes: {
        id: "chokes",
        label: "Choose a Submission",
        value: ["Rear Naked", "Triangle", "Arm Triangle", "Bow and Arrow"],
      },
      leg_attacks: {
        id: "leg attacks",
        label: "Choose a Submission",
        value: ["Heel Hook", "Knee Bar", "Toe Hold", "Straight Ankle"],
      },
      submissions: {
        id: "submissions",
        label: "Choose a Submission",
        value: ["Choke", "Arm Bar", "Kimura", "Triangle", "Leg Locks"],
      },
      actions: {
        id: "actions",
        label: "Choose an Action ",
        value: ["Escape", "Reversal", "Control", "Attack"],
      },
    };

    let nameDropdownFilter = (
      <DropdownFilter
        id={dropdownValues.category.id}
        label={dropdownValues.category.label}
        value={dropdownValues.category.value}
        // onChange={this.setCategory}
      />
    );
    if (this.state.category === "Arm Attacks") {
      nameDropdownFilter = (
        <DropdownFilter
          value={dropdownValues.arm_attacks.value}
          id={dropdownValues.category.id}
          label={dropdownValues.arm_attacks.label}
          // onChange={this.setCategory}
        />
      );
    } else if (this.state.category === "Chokes") {
      nameDropdownFilter = (
        <DropdownFilter
          value={dropdownValues.chokes.value}
          id={dropdownValues.chokes.id}
          label={dropdownValues.chokes.label}
        />
      );
    } else if (this.state.category === "Leg Attacks") {
      nameDropdownFilter = (
        <DropdownFilter
          value={dropdownValues.leg_attacks.value}
          id={dropdownValues.leg_attacks.id}
          label={dropdownValues.leg_attacks.label}
        />
      );
    }

    return (
      <div className="spec-page-container">
        <h2 className="detail-page-title">Add {this.props.title}</h2>
        <button onClick={this.props.changeForms}> Go Back</button>
        <label htmlFor="category">{this.props.title} Category:</label>
        <DropdownFilter
          id={dropdownValues.category.id}
          label={dropdownValues.category.label}
          value={dropdownValues.category.value}
          onChange={this.setCategory}
        />
        <br />
        <label htmlFor="Submission">{this.props.title}:</label>
        {nameDropdownFilter}
        {/* <DropdownFilter
          id={dropdownValues.category.id}
          label={dropdownValues.category.label}
          value={dropdownValues.category.value}
          onChange={this.setCategory}
        /> */}
        {/* <select name="Submission" id="Submission" onChange={this.setName}>
          <option value="rear naked">rear naked</option>
          <option value="triangle">triangle</option>
          <option value="bow and arrow">bow and arrow</option>
          <option value="arm triangle">arm triangle</option>
        </select> */}
        <br />
        <p>
          {this.props.title} counter : {this.state.count}
          <button
            type="button"
            className="add-specsbtn"
            onClick={this.incrementCount}
          >
            {" "}
            +
          </button>
          <button
            type="button"
            className="minus-specsbtn"
            onClick={this.decrementCount}
          >
            {" "}
            -
          </button>
        </p>
        <button type="button" className="add-specslist" onClick={this.addSpecs}>
          {" "}
          Add Specifics to list
        </button>
        <p>Selected {this.props.title} ---------- Count</p>
        <p>Anaconda Choke ---------------- 1</p>{" "}
        <p className={this.state.clicked ? "spec-active" : "spec-hidden"}>
          {this.state.name} ---------------{this.state.count}
        </p>
        <button type="button">delete</button>
        <div className="add-specs">
          <button type="submit" className="add-specsbtn">
            <Link to="/sparring_details">Save</Link>
          </button>
        </div>
      </div>
    );
  }
}
