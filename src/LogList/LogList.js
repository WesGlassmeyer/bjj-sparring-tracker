import React, { Component } from "react";
import LogEntry from "../LogEntry/LogEntry";
import "./LogList.css";
import config from "../config";

export default class LogList extends Component {
  state = {
    entries: [],
    error: null,
    isLoading: true,
  };

  setEntries = (entries) => {
    this.setState({
      entries,
      error: null,
      isLoading: false,
    });
  };

  componentDidMount() {
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
  }

  render() {
    const logEntries = this.state.entries;
    if (this.state.isLoading) {
      return <section className="LogEntryListLoad">Loading...</section>;
    }

    return (
      <section className="log-list">
        <ul className="log-list__list" aria-live="polite">
          {logEntries.map((entry) => (
            <LogEntry
              key={entry.id}
              entry={entry}
              handleEdit={this.props.handleEdit}
            />
          ))}
        </ul>
      </section>
    );
  }
}
