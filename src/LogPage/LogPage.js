import React, { Component } from "react";
import LogList from "../LogList/LogList";
import { Link } from "react-router-dom";
import "./LogPage.css";
import DetailPage from "../DetailPage/DetailPage";

export default class LogPage extends Component {
  state = {
    edit: false,
  };

  handleEdit = () => {
    console.log("clicked add", this.state.edit);
    this.setState({ edit: true });
  };
  render() {
    const edit = this.state.edit;
    if (edit === true) {
      return <DetailPage />;
    }
    return (
      <div className="log-page">
        <h2 className="log-page-title">Sparring Log</h2>

        <LogList />
        <div className="add-log">
          <button type="submit" className="add-logbtn">
            <Link to="/sparring_details">Add Sparring Log</Link>
          </button>
          <button
            type="button"
            className="add-logbtn"
            onClick={this.handleEdit}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
