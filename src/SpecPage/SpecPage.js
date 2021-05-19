import React, { Component } from "react";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import "./SpecPage.css";

export default class SpecPage extends Component {
  state = {
    category: "",
    name: "",
    count: 1,
    addedNames: this.props.detailPageState(),
  };

  setName = (event) => {
    this.setState({ name: event.target.value, count: 1 });
  };

  setCategory = (event) => {
    this.setState({ category: event.target.value, name: "", count: 1 });
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
          { name: this.state.name, count: this.state.count },
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
        id={dropdownValues.category.id}
        label={dropdownValues.category.label}
        options={dropdownValues.category.options}
        value={this.state.category}
        onChange={this.setCategory}
      />
    );
    if (this.props.title === "Sweeps") {
      categoryDropdownFilter = (
        <DropdownFilter
          id={dropdownValues.sweep_category.id}
          label={dropdownValues.sweep_category.label}
          options={dropdownValues.sweep_category.options}
          value={this.state.category}
          onChange={this.setCategory}
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
    if (this.state.category === "Arm Attacks") {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.arm_attacks.options}
          id={dropdownValues.category.id}
          label={dropdownValues.arm_attacks.label}
          value={this.state.name}
          onChange={this.setName}
        />
      );
    } else if (this.state.category === "Chokes") {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.chokes.options}
          id={dropdownValues.chokes.id}
          label={dropdownValues.chokes.label}
          value={this.state.name}
          onChange={this.setName}
        />
      );
    } else if (this.state.category === "Leg Attacks") {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.leg_attacks.options}
          id={dropdownValues.leg_attacks.id}
          label={dropdownValues.leg_attacks.label}
          value={this.state.name}
          onChange={this.setName}
        />
      );
    } else if (
      this.props.title === "Sweeps" &&
      this.state.category === "Open Guard"
    ) {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.open_guard.options}
          id={dropdownValues.open_guard.id}
          label={dropdownValues.open_guard.label}
          value={this.state.name}
          onChange={this.setName}
        />
      );
    } else if (
      this.props.title === "Sweeps" &&
      this.state.category === "Closed Guard"
    ) {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.closed_guard.options}
          id={dropdownValues.closed_guard.id}
          label={dropdownValues.closed_guard.label}
          value={this.state.name}
          onChange={this.setName}
        />
      );
    } else if (
      this.props.title === "Sweeps" &&
      this.state.category === "Half Guard"
    ) {
      nameDropdownFilter = (
        <DropdownFilter
          options={dropdownValues.half_guard.options}
          id={dropdownValues.half_guard.id}
          label={dropdownValues.half_guard.label}
          value={this.state.name}
          onChange={this.setName}
        />
      );
    }

    return (
      <div className="spec-page-container">
        <h2 className="detail-page-title">Add {this.props.title}</h2>
        <button onClick={this.props.changeForms}>Back</button>
        <label htmlFor="category">{this.props.title} Category:</label>
        {categoryDropdownFilter}

        <br />
        <label htmlFor="action_name">{this.props.title}:</label>
        {nameDropdownFilter}
        <br />
        <span className="counter-container">
          {this.props.title} Counter : {this.state.count}
          <button
            type="button"
            className="add-counter-btn"
            onClick={this.incrementCount}
          >
            {" "}
            +
          </button>
          <button
            type="button"
            className="minus-counter-btn"
            onClick={this.decrementCount}
          >
            {" "}
            -
          </button>
        </span>
        <button
          type="button"
          className="add-specs-list"
          onClick={this.addSpecs}
        >
          {" "}
          Add {this.props.title}
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
              <tr key={index} id={index}>
                <td>{names.name}</td>
                <td>{names.count}</td>
                <td>
                  <button
                    type="button"
                    className="delete-table-row-btn"
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

        <div className="add-specs">
          <button
            type="submit"
            className="save-list-btn"
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
