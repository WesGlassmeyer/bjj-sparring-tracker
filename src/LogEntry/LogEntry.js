import React from "react";
import "./LogEntry.css";

export default function LogEntry(props) {
  return (
    <li className="log-entry">
      <span className="entry-span"> {props.entry.date}</span>
      <span className="entry-span">
        {" "}
        Sparring rounds - {props.entry.rounds}
      </span>
      <span className="entry-span"> Cardio rating: {props.entry.cardio}</span>
      <span className="entry-span">
        {" "}
        Submissions executed:{" "}
        {props.entry.submissions.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.count;
        }, 0)}
      </span>
      <span className="entry-span">
        {" "}
        Times Tapped:{" "}
        {props.entry.taps.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.count;
        }, 0)}
      </span>
      <span className="entry-span">
        {" "}
        Sweeps executed:{" "}
        {props.entry.sweeps.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.count;
        }, 0)}
      </span>
      <button
        type="button"
        onClick={() => {
          props.handleEdit(props.entry.id);
        }}
      >
        Edit
      </button>
    </li>
  );
}
