import React, { Component } from "react";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import "./SpecPage.css";

export default class SpecPage extends Component {
  state = {
    group: "",
    category: this.props.category,
    name: "",
    count: 1,
    addedNames: this.props.detailPageState(),
  };

  setName = (event) => {
    this.setState({ name: event.target.value, count: 1 });
  };

  setGroup = (event) => {
    this.setState({ group: event.target.value, name: "", count: 1 });
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count <= 1) {
      this.setState({ count: 1 });
    }
  };

  addSpecs = () => {
    if (
      this.state.name === "" ||
      this.state.addedNames.some(
        (entry) => entry.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      return null;
    } else {
      this.setState({
        addedNames: [
          ...this.state.addedNames,
          {
            name: this.state.name,
            count: this.state.count,
            category: this.state.category,
          },
        ],
      });
    }
  };

  deleteTableRow = (idx) => {
    const addedNames = this.state.addedNames;
    const newAddedNames = addedNames.filter((item, index) => {
      return idx !== index;
    });
    this.setState({ addedNames: newAddedNames });
  };

  render() {
    const dropdownValues = {
      category: {
        id: "category",
        label: "Select a Category",
        options: ["Arm Attacks", "Chokes", "Leg Attacks"],
      },
      sweep_category: {
        id: "category",
        label: "Select a Category",
        options: ["Open Guard", "Closed Guard", "Half Guard"],
      },
      arm_attacks: {
        id: "arm attacks",
        label: "Select Submissions",
        options: ["Americana", "Arm Bar", "Kimura", "Omoplata"],
      },
      chokes: {
        id: "chokes",
        label: "Select Submissions",
        options: [
          "Rear Naked",
          "Triangle",
          "Head and Arm",
          "Guillotine",
          "Collar Choke",
        ],
      },
      leg_attacks: {
        id: "leg attacks",
        label: "Select Submissions",
        options: ["Heel Hook", "Knee Bar", "Toe Hold", "Straight Ankle"],
      },
      open_guard: {
        id: "open guard",
        label: "Select Sweeps",
        options: [
          "Elevator Sweep",
          "Tripod Sweep",
          "Sickle Sweep",
          "Overhead Sweep",
        ],
      },
      closed_guard: {
        id: "closed guard",
        label: "Select Sweeps",
        options: [
          "Flower Sweep",
          "Hip Sweep",
          "Scissor Sweep",
          "Pendulum Sweep",
        ],
      },
      half_guard: {
        id: "half guard",
        label: "Select Sweeps",
        options: ["Knee Lever Sweep", "Knee Tap Sweep", "Roll Thru Sweep"],
      },
    };

    let categoryDropdownFilter = (
      <DropdownFilter
        id={dropdownValues.category.options}
        label={dropdownValues.category.label}
        options={dropdownValues.category.options}
        value={this.state.group}
        onChange={this.setGroup}
        aria="attacks"
      />
    );
    if (this.props.title === "Sweeps") {
      categoryDropdownFilter = (
        <DropdownFilter
          id={dropdownValues.sweep_category.id}
          label={dropdownValues.sweep_category.label}
          options={dropdownValues.sweep_category.options}
          value={this.state.group}
          onChange={this.setGroup}
          aria="sweeps"
        />
      );
    }

    let nameDropdownFilter = (
      <DropdownFilter
        disabled={true}
        id={dropdownValues.category.id}
        label={`Select ` + this.props.title}
        options={dropdownValues.category.options}
        value={this.state.name}
        onChange={this.setName}
      />
    );
    if (this.state.group === "Arm Attacks") {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.arm_attacks.options}
          id={dropdownValues.category.id}
          label={dropdownValues.arm_attacks.label}
          value={this.state.name}
          onChange={this.setName}
          aria="arm attacks"
        />
      );
    } else if (this.state.group === "Chokes") {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.chokes.options}
          id={dropdownValues.chokes.id}
          label={dropdownValues.chokes.label}
          value={this.state.name}
          onChange={this.setName}
          aria="chokes"
        />
      );
    } else if (this.state.group === "Leg Attacks") {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.leg_attacks.options}
          id={dropdownValues.leg_attacks.id}
          label={dropdownValues.leg_attacks.label}
          value={this.state.name}
          onChange={this.setName}
          aria="leg attacks"
        />
      );
    } else if (
      this.props.title === "Sweeps" &&
      this.state.group === "Open Guard"
    ) {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.open_guard.options}
          id={dropdownValues.open_guard.id}
          label={dropdownValues.open_guard.label}
          value={this.state.name}
          onChange={this.setName}
          aria="open guard sweeps"
        />
      );
    } else if (
      this.props.title === "Sweeps" &&
      this.state.group === "Closed Guard"
    ) {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.closed_guard.options}
          id={dropdownValues.closed_guard.id}
          label={dropdownValues.closed_guard.label}
          value={this.state.name}
          onChange={this.setName}
          aria="closed guard sweeps"
        />
      );
    } else if (
      this.props.title === "Sweeps" &&
      this.state.group === "Half Guard"
    ) {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.half_guard.options}
          id={dropdownValues.half_guard.id}
          label={dropdownValues.half_guard.label}
          value={this.state.name}
          onChange={this.setName}
          aria="half guard sweeps"
        />
      );
    }

    return (
      <div className="center-spec">
        <h2 className="page-title">Add {this.props.title}</h2>
        <button
          className="button-format center-btn"
          onClick={this.props.changeForms}
        >
          Back
        </button>
        <div className="spec-input-format">
          <label className="bold" htmlFor="category">
            {this.props.title} Category:
          </label>
          {categoryDropdownFilter}
        </div>

        <div className="spec-input-format">
          <label className="bold" htmlFor="action_name">
            {this.props.title}:
          </label>
          {nameDropdownFilter}
        </div>
        <br />
        <span className="counter-container">
          <div className="bold">
            <span> {this.props.title} Counter:</span>{" "}
            <span className="counter-number"> {this.state.count}</span>
          </div>
          <div className="spec-counter-btns">
            <button
              type="button"
              className="add-counter-btn bold"
              onClick={this.incrementCount}
            >
              {" "}
              +
            </button>
            <button
              type="button"
              className="minus-counter-btn bold"
              onClick={this.decrementCount}
            >
              {" "}
              -
            </button>
          </div>
        </span>
        <button
          type="button"
          className="button-format center-btn"
          onClick={this.addSpecs}
        >
          {" "}
          Add {this.props.title}
        </button>
        <table className="spec-table margin-top">
          <thead>
            <tr className="title-row">
              <th>Selected {this.props.title}</th>
              <th className="center-number">Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.addedNames.map((names, index) => (
              <tr className="table-row bold" key={index} id={index}>
                <td>{names.name}</td>
                <td className="center-number">{names.count}</td>
                <td>
                  <button
                    type="button"
                    className="delete-button-format"
                    onClick={() => {
                      this.deleteTableRow(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-specs margin-top">
          <button
            type="submit"
            className="button-format center-btn"
            onClick={() => {
              this.props.setSpecPageState(this.state.addedNames);
              this.props.changeForms();
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
