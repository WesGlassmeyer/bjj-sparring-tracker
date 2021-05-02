import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import "./SpecPage.css";

export default class SpecPage extends Component {
  state = {
    category: "",
    name: "",
    count: 0,
    addedNames: [],
    filterSelections: [],
  };

  setName = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value, count: 0 });
  };

  setCategory = (event) => {
    this.setState({ category: event.target.value, name: "", count: 0 });
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
    console.log(this.state.addedNames, this.state.name);
    if (
      this.state.count === 0 ||
      this.state.name === "" ||
      this.state.addedNames.includes(this.state.name)
    ) {
      return null;
    } else {
      this.setState({
        addedNames: [
          ...this.state.addedNames,
          { name: this.state.name, count: this.state.count },
        ],
      });
    }
  };

  setFilterSelections = (value, filterType) => {
    const { filterSelections } = this.state;
    this.setState({
      filterSelections: { ...filterSelections, [filterType]: value },
    });
  };

  deleteTableRow = (index) => {
    this.setState({ addedNames: [] });
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
        onChange={this.setName}
      />
    );
    if (this.state.category === "Arm Attacks") {
      nameDropdownFilter = (
        <DropdownFilter
          value={dropdownValues.arm_attacks.value}
          id={dropdownValues.category.id}
          label={dropdownValues.arm_attacks.label}
          onChange={this.setName}
        />
      );
    } else if (this.state.category === "Chokes") {
      nameDropdownFilter = (
        <DropdownFilter
          value={dropdownValues.chokes.value}
          id={dropdownValues.chokes.id}
          label={dropdownValues.chokes.label}
          onChange={this.setName}
        />
      );
    } else if (this.state.category === "Leg Attacks") {
      nameDropdownFilter = (
        <DropdownFilter
          value={dropdownValues.leg_attacks.value}
          id={dropdownValues.leg_attacks.id}
          label={dropdownValues.leg_attacks.label}
          onChange={this.setName}
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
        <table>
          <thead>
            <tr>
              <th>{this.props.title}</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {this.state.addedNames.map((names, index) => (
              <tr key={index}>
                <td>{names.name}</td>
                <td>{names.count}</td>
                <td>
                  <button type="button" onClick={this.deleteTableRow}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className={this.state.clicked ? "spec-active" : "spec-hidden"}>
          {this.state.name} ---------------{this.state.count}
        </p>

        <div className="add-specs">
          <button type="submit" className="add-specsbtn">
            <Link to="/sparring_details">Save</Link>
          </button>
        </div>
      </div>
    );
  }
}

//switch added names to table, add logic for no zero count, delete button removes item from added names,
//when change category reset name value back to "", add logic so you cant add multiple of the same addedNames to the table
