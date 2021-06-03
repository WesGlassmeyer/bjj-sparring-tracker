import React, { Component } from "react";
import LogList from "../LogList/LogList";
import "./LogPage.css";
import DetailPage from "../DetailPage/DetailPage";
import config from "../config";

export default class LogPage extends Component {
  state = {
    edit: false,
    initialData: null,
  };

  handleEditState = () => {
    this.setState({ edit: true });
    if (this.state.edit === true) {
      this.setState({ edit: false, initialData: null });
    }
  };

  fetchData = () => {
    fetch(config.SERVER_endpoint)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res.json();
      })
      .then((res) => this.setEntries(res))
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  handleEdit = (id) => {
    if (this.state.edit === true) {
      this.setState({ edit: false });
    }
    fetch(`${config.SERVER_endpoint}/` + id, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        if (!response.ok)
          return response.json().then((error) => Promise.reject(error));
        return response.json();
      })
      .catch((error) => {
        console.error({ error });
      })
      .then((res) => {
        this.setState({
          edit: true,
          initialData: res,
        });
      });
  };

  render() {
    const edit = this.state.edit;
    if (edit === true) {
      return (
        <DetailPage
          initialData={this.state.initialData}
          handleEditState={this.handleEditState}
        />
      );
    }
    return (
      <div className="log-page">
        <h2 className="log-page-title">Sparring Log</h2>

        <LogList handleEdit={this.handleEdit} />
        <div className="add-log">
          <button
            type="button"
            className="add-log-btn"
            onClick={this.handleEditState}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
