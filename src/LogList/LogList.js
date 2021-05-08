import React, { Component } from "react";
import LogEntry from "../LogEntry/LogEntry";
import "./LogList.css";
import dummydata from "../dummydata";
// import config from "../config";

export default class LogList extends Component {
  // state = {
  //   entries: [],
  //   error: null,
  // };

  //   setEntries = (entries) => {
  //     this.setState({
  //       entries,
  //       error: null,
  //     });
  //   };

  //   componentDidMount() {
  //     fetch(config.SERVER_endpoint)
  //       .then((res) => {
  //         if (!res.ok) {
  //           return res.json().then((error) => Promise.reject(error));
  //         }

  //         return res.json();
  //       })
  //       .then((res) => this.setEntries(res))
  //       .catch((error) => {
  //         console.error(error);
  //         this.setState({ error });
  //       });
  //   }

  render() {
    // const logEntries = this.state.entries;
    // if (this.state.entries.length === 0) {
    //   return <section className="LogEntryListLoad">Loading...</section>;
    // }
    const logEntries = dummydata.entries;
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
