import React, { Component } from "react";
import LogList from "../LogList/LogList";
import "./LogPage.css";
import DetailPage from "../DetailPage/DetailPage";

export default class LogPage extends Component {
  state = {
    edit: false,
  };

  handleEdit = () => {
    this.setState({ edit: true });
    if (this.state.edit === true) {
      this.setState({ edit: false });
    }
  };

  render() {
    const edit = this.state.edit;
    if (edit === true) {
      return <DetailPage handleEdit={this.handleEdit} />;
    }
    return (
      <div className="log-page">
        <h2 className="log-page-title">Sparring Log</h2>

        <LogList handleEdit={this.handleEdit} />
        <div className="add-log">
          <button
            type="button"
            className="add-log-btn"
            onClick={this.handleEdit}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
