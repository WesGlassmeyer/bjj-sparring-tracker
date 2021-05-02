import React from "react";
// import { Link } from "react-router-dom";
import "./LogEntry.css";

export default function LogEntry(props) {
  return (
    <li className="log-entry">
      <span className="entry-span"> {props.entry.date}</span>
      <span className="entry-span">
        {" "}
        Sparring rounds - {props.entry.cardio.rounds}
      </span>
      <span className="entry-span">
        {" "}
        Cardio rating: {props.entry.cardio.rating}
      </span>
      <span className="entry-span">
        {" "}
        Submissions executed: {props.entry.submissions.count}
      </span>
      <span className="entry-span">
        {" "}
        Times Tapped: {props.entry.taps.count}
      </span>
      <span className="entry-span">
        {" "}
        Sweeps executed: {props.entry.sweeps.count}
      </span>
      <button type="button">Edit</button>
    </li>
  );
}
